# Formspree Integration Setup

## Overview
This project now uses Formspree for contact form submissions instead of Web3Forms/Resend.

## Configuration
- **Form Action**: `https://formspree.io/f/xkgvjlpk`
- **Method**: `POST`
- **Target Email**: `vixelgeo@gmail.com`

## Form Fields
The contact form includes these required fields:
- `name` - Full name (text input)
- `email` - Email address (email input)  
- `phone` - Phone number (tel input)
- `message` - Message content (textarea)

## Success/Error Messages
- **Success**: "წარმატებით გაიგზავნა" (Successfully sent)
- **Error**: "შეცდომა! თავიდან სცადეთ." (Error! Try again)

## Testing
1. **Local Testing**: Use the test form in `test-formspree.html`
2. **Production Testing**: Test on https://vixel.ge
3. **Email Verification**: Check that emails arrive at vixelgeo@gmail.com

## Benefits
- No server setup required
- Automatic spam protection
- Email notifications
- Form analytics dashboard
- Free tier available

## Migration Notes
- Removed: `server.js`, `RESEND_SETUP.md`
- Removed: Resend, Express, CORS dependencies
- Updated: `ContactModal.tsx` with Formspree integration
- Updated: `package.json` and `env.example`
