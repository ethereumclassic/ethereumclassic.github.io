import React from 'react';

// TODO test when CORS enabled or switch mailchimp

const endpoint = 'https://wordpress.ethereumclassic.org/newsletter-thank-you/';

class Newsletter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, submitted: false };
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();
    const email = new FormData(e.target).get('email');
    this.setState({ loading: true });
    const response = await fetch(endpoint, {
      method: 'POST',
      body: {
        input_1: email,
        gform_target_page_number_2: 0,
        gform_source_page_number_2: 1,
        is_submit_2: 1,
        gform_submit: 2
      }
    });
    this.setState({ loading: false });
  }

  render() {
    const { loading, error, submitted } = this.state;
    return (
      <>
        <h3>Newsletter</h3>
        <p>Sign up below to get the latest updates straight to your inbox.</p>
        <form onSubmit={this.onSubmit}>
          <div className="fields">
            <div className="field">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
          </div>
          <ul className="actions">
            <li>
              <input
                type="submit"
                value="Sign Up"
                className="button primary"
                disabled={loading ? 'disabled' : null}
              />
            </li>
          </ul>
        </form>
      </>
    );
  }
}

export default Newsletter;
