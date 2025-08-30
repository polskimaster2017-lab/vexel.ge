# Resend API Setup Instructions

## 1. Get Resend API Key

1. Go to [Resend.com](https://resend.com) and create an account
2. Verify your domain (vixel.ge) or use the sandbox domain
3. Get your API key from the dashboard

## 2. Environment Configuration

Create a `.env` file in the root directory:

```env
# Resend API Configuration
RESEND_API_KEY=your_actual_resend_api_key_here

# Server Configuration
PORT=3001
```

## 3. Domain Verification

In Resend dashboard:
1. Add your domain: `vixel.ge`
2. Verify DNS records (TXT, MX, SPF)
3. Or use sandbox domain for testing

## 4. Running the Application

### Development (with API server):
```bash
npm run dev:full
```

This will start both:
- Vite dev server on port 5173
- Express API server on port 3001

### Production:
1. Build the frontend: `npm run build`
2. Deploy the backend (server.js) to your hosting
3. Update API_BASE_URL in ContactModal.tsx to your production domain

## 5. Testing

1. Fill out the contact form
2. Check browser console for API logs
3. Check server console for email sending logs
4. Verify email arrives at vixelgeo@gmail.com

## 6. Troubleshooting

- Check server logs for Resend API errors
- Verify API key is correct
- Ensure domain is verified in Resend
- Check CORS settings if needed
