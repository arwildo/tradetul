import React from "react";
import Footer from "./footer";

import Build from "../assets/img/build.svg";

class Privacy extends React.Component {
  render() {
    return(
      <div className="mainDiv">
        <section className="max-w-6xl mx-auto p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Section One */}
              <div className="w-full rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="w-96 rounded-lg bg-dim-700 overflow-hidden shadow-lg">

                  <div className="flex">
                    <div className="flex-1 m-2">
                      <h2 className="px-4 py-2 text-md w-48 font-semibold text-white">Privacy Policy</h2>
                    </div>
                  </div>
                  <hr className="border-gray-800"/>

                 {/*<!--Section 1-->*/}
                  <div className="mt-3 mb-6 mx-2">
                    <div className="px-4 w-full text-sm text-gray-400 text-justify">
                      <p>At TradeTul, accessible from tradetul.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by TradeTul and how we use it.</p>
                      <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
                      <br />

                      <b>Log Files</b>
                      <p>TradeTul follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
                      <br />

                      <b>Privacy Policies</b>
                      <p>You may consult this list to find the Privacy Policy for each of the advertising partners of TradeTul.</p>
                      <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on TradeTul, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
                      <p>Note that TradeTul has no access to or control over these cookies that are used by third-party advertisers.</p>
                      <br />

                      <b>Third Party Privacy Policies</b>
                      <p>TradeTul's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>
                      <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?</p>
                      <br />

                      <b>Children's Information</b>
                      <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
                      <p>TradeTul does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
                      <br />

                      <b>Online Privacy Policy Only</b>
                      <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in TradeTul. This policy is not applicable to any information collected offline or via channels other than this website.</p>
                      <br />

                      <b>Consent</b>
                      <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
                    </div>
                  </div>
                  <hr className="border-gray-800" />
                  
                </div>
              </div>

            <Footer />

          </div>
        </section>
      </div>
    );
  }
}

export default Privacy;
