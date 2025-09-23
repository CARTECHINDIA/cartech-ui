# TODO List

## ✅ Completed Tasks
- Fixed login form label visibility (changed white text to visible gray)
- Enhanced login error handling with better user messages and validation
- ✅ Added Min Increment field to bidding form (form state, API payload, and UI input field)
- ✅ Integrated API endpoint `http://98.80.120.96:8080/cartech/bidding/schedule/1234` in bidding form
- ✅ Updated bidding form to use `basePrice` instead of `startAmount` as per API requirements

## 📋 Implementation Summary
### Min Increment Field Added:
- ✅ Added `minIncrement` to form state in BidForm.js
- ✅ Added Min Increment input field to the form grid (positioned after Start Amount)
- ✅ Updated API payload to include `minIncrement: Number(form.minIncrement)`
- ✅ Added proper validation (required, min="0", step="100")
- ✅ Added placeholder text for better UX

## 🧪 Testing Checklist
- [ ] Test login with invalid credentials (should show proper error message)
- [ ] Test login with valid credentials (should work correctly)
- [ ] Test bidding form with new Min Increment field
- [ ] Verify Min Increment field appears in correct position
- [ ] Verify Min Increment value is sent in API request
