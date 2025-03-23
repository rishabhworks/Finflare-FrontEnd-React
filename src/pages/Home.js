import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    { name: 'John D.', content: 'Tax and Toasted helped me save so much on my taxes! The jokes made it fun to learn.' },
    { name: 'Sarah M.', content: 'I love the interactive style of Tax Gambit. It\'s like bingo with a twist of financial knowledge!' },
    { name: 'Mike L.', content: 'FinFlare made taxes feel less intimidating. I look forward to the next season!' },
  ];

  // Change testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ textAlign: 'center', padding: { xs: '20px', sm: '40px' }, maxWidth: { xs: '100%', sm: '900px' }, margin: '0 auto' }}>
      <Typography variant="h2" gutterBottom sx={{ color: '#2e7d32', fontWeight: 'bold', fontSize: { xs: '1.5rem', sm: '2.5rem' } }}>
        💰 Welcome to FinFlare 💰
      </Typography>
      <Typography variant="h5" paragraph sx={{ color: '#1a3c34', maxWidth: '700px', margin: '0 auto 20px', fontSize: { xs: '1rem', sm: '1.25rem' } }}>
        Grow your wealth with a grin! Catch <strong>Tax and Toasted</strong> (roasting financial flops) and <strong>Tax Gambit</strong> (Bingo meets 90+ tax FAQs).
      </Typography>

      <Link to="/fire-calculator">
        <Button variant="contained" sx={{ padding: { xs: '10px 20px', sm: '15px 40px' }, fontSize: { xs: '14px', sm: '18px' }, fontWeight: 'bold' }}>
          Stack Your Cash!
        </Button>
      </Link>

      {/* Why FinFlare Section */}
      <Box sx={{ marginTop: '40px' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#2e7d32', marginBottom: '20px' }}>
          Why FinFlare?
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ padding: '20px', textAlign: 'center', backgroundColor: '#f1f8e9' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>✅ Smart Tax Tips</Typography>
              <Typography>Avoid overpaying on taxes with quick and smart tips!</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ padding: '20px', textAlign: 'center', backgroundColor: '#f1f8e9' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>💳 Credit Card Hacks</Typography>
              <Typography>Maximize rewards and minimize your credit card debt.</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ padding: '20px', textAlign: 'center', backgroundColor: '#f1f8e9' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>📈 Investment Insights</Typography>
              <Typography>Learn how to grow your wealth with insightful tips.</Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ marginTop: '40px' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#2e7d32', marginBottom: '20px' }}>
          Testimonials
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <motion.div
            key={currentTestimonial} // Ensure a new animation for every testimonial change
            initial={{ opacity: 0, x: 100 }} // Start from the right
            animate={{ opacity: 1, x: 0 }} // Slide to its position
            exit={{ opacity: 0, x: -100 }} // Slide out to the left
            transition={{ duration: 1 }} // 1-second duration for smooth slide transition
          >
            <Card sx={{ padding: '20px', backgroundColor: '#e8f5e9', maxWidth: '500px', width: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{testimonials[currentTestimonial].name}</Typography>
                <Typography>{testimonials[currentTestimonial].content}</Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Box>
      </Box>

      {/* Blog Section */}
      <Box sx={{ marginTop: '40px' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#2e7d32', marginBottom: '20px' }}>
          Latest Blogs
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card sx={{ padding: '20px' }}>
              <img src={require('../images/cc.jpeg')} alt="Credit Card Strategies" style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '16px' }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Credit Card Strategies for Building Wealth</Typography>
              <Typography paragraph>
                In this blog post, we explore the different ways you can use credit cards to build wealth. While credit cards can often be seen as a debt trap, when used responsibly, they can be an excellent tool for earning rewards, building credit, and even saving money on interest. We dive into topics like choosing the best credit cards for your needs, paying off credit card debt strategically, and using credit cards for everyday purchases without overspending. This post is a must-read if you want to use credit cards to your advantage.
              </Typography>
              
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card sx={{ padding: '20px' }}>
              <img src={require('../images/tax.jpeg')} alt="Tax Tips" style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '16px' }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>How To Save Big with Tax Deductions</Typography>
              <Typography paragraph>
                Learning about tax deductions can save you a lot of money. In this blog post, we dive deep into various types of deductions that are available for individuals and businesses. From mortgage interest to charitable donations, we cover everything you need to know to reduce your taxable income. Not only will you learn how to maximize your deductions, but we’ll also explain common mistakes people make when claiming deductions and how to avoid them. After reading this blog, you’ll be well-equipped to file your taxes efficiently and save money!
              </Typography>
              
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card sx={{ padding: '20px' }}>
              <img src={require('../images/taxGambit.png')} alt="Tax Gambit" style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '16px' }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>The Tax Gambit Bingo Game: A Review</Typography>
              <Typography paragraph>
                The Tax Gambit Bingo Game is an innovative way to engage with tax-related knowledge. If you love bingo and learning at the same time, this is the game for you. It combines the classic fun of bingo with the practical knowledge of tax filing and planning. Players will be challenged with 90+ real-world tax questions, each designed to provide insights into the most common and tricky aspects of tax law. It’s a fun, competitive way to ensure you’re on top of your taxes while having a blast. Don’t miss out on this exciting learning opportunity!
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card sx={{ padding: '20px' }}>
              <img src={require('../images/taxtoasted.png')} alt="Tax and Toasted" style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '16px' }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Tax & Toasted - The Best Tax Tips</Typography>
              <Typography paragraph>
                If you're looking to save money on taxes, then you must tune in to Tax & Toasted! This unique approach to tax advice combines financial wisdom with humor, making complex tax topics easy to digest. Whether you’re filing for the first time or have years of experience, there’s something for everyone. The show covers tax deductions, tax credits, common mistakes, and more, all while keeping you entertained with witty commentary and humorous sketches. You’ll never look at taxes the same way again!
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;






