import React from 'react';
import { Box, Typography } from '@mui/material';

const TaxTricks = () => {
  return (
    <Box sx={{ padding: '50px', maxWidth: '900px', margin: '0 auto' }}>
      <Typography variant="h2" gutterBottom sx={{ color: '#2e7d32', fontWeight: 'bold' }}>
        💸 Tax Tricks 101
      </Typography>
      <Typography paragraph sx={{ fontSize: '18px', color: '#1a3c34' }}>
        Welcome to FinFlare’s crash course on outsmarting the tax game! Taxes don’t have to be a buzzkill—here’s how to keep more of your cash with swagger and a smirk. Ready to roast the taxman like we did at Tax and Toasted? Let’s dive in!
      </Typography>

      <Typography variant="h5" sx={{ color: '#2e7d32', marginTop: '30px', fontWeight: 'bold' }}>
        Trick #1: Max Out Your Deductions
      </Typography>
      <Typography paragraph sx={{ fontSize: '16px' }}>
        Did you know you can deduct stuff like home office supplies, charity donations, or even that fancy calculator you bought for Tax Gambit? Keep receipts and claim everything you’re allowed—every dollar counts! <strong>Pro Tip:</strong> Check IRS rules or ask a tax pro to avoid a “whoops” moment.
      </Typography>

      <Typography variant="h5" sx={{ color: '#2e7d32', marginTop: '30px', fontWeight: 'bold' }}>
        Trick #2: Stash Cash in a Retirement Account
      </Typography>
      <Typography paragraph sx={{ fontSize: '16px' }}>
        Shove some money into an IRA or 401(k) and watch your taxable income shrink faster than a comedian’s ego after a bad set. You’ll save on taxes now *and* build a fat nest egg for later. In 2025, you can tuck away up to $7,000 in an IRA—more if you’re over 50!
      </Typography>

      <Typography variant="h5" sx={{ color: '#2e7d32', marginTop: '30px', fontWeight: 'bold' }}>
        Trick #3: Work the Side Hustle Smart
      </Typography>
      <Typography paragraph sx={{ fontSize: '16px' }}>
        Got a gig selling crafts or roasting tax tips online? You can deduct expenses like your laptop, internet bill, or even a chunk of your rent if you’ve got a home office. Turn that hustle into a tax break—just track it like a Bingo card at Tax Gambit!
      </Typography>

      <Typography variant="h5" sx={{ color: '#2e7d32', marginTop: '30px', fontWeight: 'bold' }}>
        Trick #4: Timing Is Everything
      </Typography>
      <Typography paragraph sx={{ fontSize: '16px' }}>
        Push big expenses (like medical bills or donations) into one year to itemize deductions and beat the standard deduction ($14,600 for singles in 2025). Time it right, and you’ll pocket more cash than a Tax Gambit winner!
      </Typography>

      <Typography paragraph sx={{ fontSize: '18px', marginTop: '40px', fontStyle: 'italic' }}>
        Want more? Join a FinFlare event or hit up our Contact page—we’ll keep the tax tricks coming! 💰
      </Typography>
    </Box>
  );
};

export default TaxTricks;