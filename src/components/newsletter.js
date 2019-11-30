import React from 'react';
import Translate from './translate';

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
        <h3>
          <Translate text="newsletterTitle" />
        </h3>
        <p>
          <Translate text="newsletterInfo" />
        </p>
        {submitted ? (
          <p>
            <b>
              <Translate text="newsletterConfirmation" />
            </b>
          </p>
        ) : (
          <Translate
            all={t => (
              <form onSubmit={this.onSubmit}>
                <div className="fields">
                  <div className="field">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder={t.newsletterEmail}
                      disabled={loading ? 'disabled' : null}
                    />
                  </div>
                </div>
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      value={loading ? t.newsletterSubmitting : t.newsletterSubmit}
                      className="button primary"
                      disabled={loading ? 'disabled' : null}
                    />
                  </li>
                </ul>
              </form>
            )}
          />
        )}
      </>
    );
  }
}

export default Newsletter;
