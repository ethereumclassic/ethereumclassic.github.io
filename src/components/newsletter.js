import React from 'react';

// TODO switch to mailchimp

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

    const submittedData = new FormData();
    submittedData.append('input_1', email);
    submittedData.append('gform_target_page_number_2', 0);
    submittedData.append('gform_source_page_number_2', 1);
    submittedData.append('is_submit_2', 1);
    submittedData.append('gform_submit', 2);

    await fetch(endpoint, {
      method: 'POST',
      body: submittedData
    });
    this.setState({ submitted: true });
  }

  render() {
    const { loading, submitted } = this.state;
    return (
      <>
        <h3>Newsletter</h3>
        <p>Sign up below to get the latest updates straight to your inbox.</p>
        {submitted ? (
          <p>
            <b>Thank you for subscribing to the ETC newsletter!</b>
          </p>
        ) : (
          <form onSubmit={this.onSubmit}>
            <div className="fields">
              <div className="field">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  disabled={loading ? 'disabled' : null}
                />
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
        )}
      </>
    );
  }
}

export default Newsletter;
