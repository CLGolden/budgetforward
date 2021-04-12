# BudgetForward
The conventional way of creating a budget is to create an average of one's fixed expenses and income for a 30-day period.

This is a really unforgiving number.

What if, for example, on the 10th of the month, I want to know if I can responsibly spend $50 on something without running out of money before the next paycheck?

But, wait, didn't I go out to a movie last week? And how many lattes have I bought? I knew I had $80 to spend this month, but when exactly?

Granted, this app might only appeal to people who's cash hovers around zero. But that's where I've been all too often in my life, and that's just when I need to budget the most!

Budgeting has always felt like an excercise in failure to me. Preparing an accurate budget means carefully examining all the things I bought last month that I 'shouldn't have.' 

What if budgeting could be an exercise in hope and progress?

What I needed was a way to **forecast** cash flow. A program that would give my cash balance on a daily basis relative to the future, not to the past.

I could find this program buried in other complex financial software, and they were focussed more on stock trends than cash flow. 

I found only one independent forecasting app, https://balanceforecastingapp.com

The original developer built it in PHP, then sold it. Now it's clumsy, has no free option.

I want to build one in JS/React.

General Plan:
- Build form with income/expense data going to JSON file and into a table
- Sort data by year, month, day with recurring
- Persist data
- Calculate balance per day from previous balance
- Style balance to red when negative
