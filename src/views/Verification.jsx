import React from 'react';
import { CredentialType, IDKitWidget, ISuccessResult } from "@worldcoin/idkit";
import './Verification.css';

const Verification = () => {
  const handleProof = (result) => {
		return new Promise((resolve) => {
			setTimeout(() => resolve(), 3000);
		});
	};

	const onSuccess = (result) => {
		console.log(result);
	};

	const urlParams = new URLSearchParams(window.location.search);
	const credential_types = (urlParams.get("credential_types")?.split(",")) ?? [
		CredentialType.Orb,
		CredentialType.Phone,
	];

	const action = urlParams.get("action") ?? "";
	const app_id = urlParams.get("app_id") ?? "wid_staging_1234";


  return (
    <div className="verification-container">
      <h1>Identity Verification</h1>
      <p className="verification-description">
        Your security is our priority. Verify your identity seamlessly with VerifAI's advanced AI-driven mechanism, offering robust and safe platform experience.
      </p>
      <form className="verification-form">
        {/* Add form fields and submit button */}
      </form>
    </div>
  );
};

export default Verification;
