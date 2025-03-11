import React from 'react';
import { Box, Typography } from '@mui/material';

const CreditCardHacks = () => {
  return (
    <Box sx={{ padding: '50px', maxWidth: '900px', margin: '0 auto' }}>
      <Typography variant="h2" gutterBottom sx={{ color: '#2e7d32', fontWeight: 'bold' }}>
        💰 Credit Card Hacks
      </Typography>
      <Typography paragraph sx={{ fontSize: '18px', color: '#1a3c34' }}>
        Ready to turn your credit card into a cash-spewing sidekick? At FinFlare, we’re all about raking in rewards without the stress—think of this as your Bingo card for beating the banks at their own game. Let’s stack those points like a Tax Gambit champ!
      </Typography>

      <Typography variant="h5" sx={{ color: '#2e7d32', marginTop: '30px', fontWeight: 'bold' }}>
        Hack #1: Chase the Sign-Up Bonuses
      </Typography>
      <Typography paragraph sx={{ fontSize: '16px' }}>
        New card? Grab that juicy sign-up bonus—some offer 50,000 points or $200 cash if you spend a set amount (like $500) in the first 3 months. It’s free money, folks! <strong>Pro Tip:</strong> Time it with a big purchase, but don’t overspend just to hit it.
      </Typography>

      <Typography variant="h5" sx={{ color: '#2e7d32', marginTop: '30px', fontWeight: 'bold' }}>
        Hack #2: Stack Cash Back Like a Boss
      </Typography>
      <Typography paragraph sx={{ fontSize: '16px' }}>
        Get a card with rotating categories (5% back on groceries, gas, etc.) and pair it with a flat-rate card (1.5% on everything else). Use the right card at the right time, and you’ll be swimming in cash faster than a comedian roasting tax loopholes at Tax and Toasted!
      </Typography>

      <Typography variant="h5" sx={{ color: '#2e7d32', marginTop: '30px', fontWeight: 'bold' }}>
        Hack #3: Redeem Points for Max Value
      </Typography>
      <Typography paragraph sx={{ fontSize: '16px' }}>
        Don’t cash out points for lame gift cards—transfer them to travel partners (airlines, hotels) where they’re often worth 2-3x more. A 50,000-point bonus could snag you a free flight! <strong>Pro Tip:</strong> Check your card’s portal for sweet deals.
      </Typography>

      <Typography variant="h5" sx={{ color: '#2e7d32', marginTop: '30px', fontWeight: 'bold' }}>
        Hack #4: Dodge Interest Like a Pro
      </Typography>
      <Typography paragraph sx={{ fontSize: '16px' }}>
        Pay your balance in full every month to avoid interest—those rates can hit 20% or more! Set up autopay and treat your card like a debit card. No debt, all rewards—now that’s a FinFlare win!
      </Typography>

      <Typography paragraph sx={{ fontSize: '18px', marginTop: '40px', fontStyle: 'italic' }}>
        Want to level up your credit game? Hit us up at Contact or catch a FinFlare event for more cash-hacking tricks! 💸
      </Typography>
    </Box>
  );
};

export default CreditCardHacks;