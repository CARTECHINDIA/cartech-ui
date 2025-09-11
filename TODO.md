# TODO: Update SignupForm to send document as base64 string

- [x] Modify signupData state: change document from null to empty string
- [x] Update handleFileChange: convert file to base64 string and store in state
- [x] Update handleSubmit: send JSON payload instead of FormData, include document as string
- [x] Change axios headers to 'application/json'
- [ ] Test the form submission
