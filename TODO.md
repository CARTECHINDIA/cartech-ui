# TODO List

## ✅ Completed Tasks
- Fixed login form label visibility (changed white text to visible gray)
- Enhanced login error handling with better user messages and validation
- ✅ Added Min Increment field to bidding form (form state, API payload, and UI input field)

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
