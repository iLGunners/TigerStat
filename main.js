document.getElementById("header1").innerHTML = "Hello Tiger";

var odiDataList = [
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Zimbabwe",
    "Margin": "38 runs",
    "Ground": "Dhaka",
    "Match Date": "Jan 10, 2009"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Sri Lanka",
    "Winner": "Bangladesh",
    "Margin": "5 wickets",
    "Ground": "Dhaka",
    "Match Date": "Jan 14, 2009"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Sri Lanka",
    "Winner": "Sri Lanka",
    "Margin": "2 wickets",
    "Ground": "Dhaka",
    "Match Date": "Jan 16, 2009"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Zimbabwe",
    "Margin": "2 wickets",
    "Ground": "Dhaka",
    "Match Date": "Jan 19, 2009"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Bangladesh",
    "Margin": "6 wickets",
    "Ground": "Dhaka",
    "Match Date": "Jan 21, 2009"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Bangladesh",
    "Margin": "6 wickets",
    "Ground": "Dhaka",
    "Match Date": "Jan 23, 2009"
  },
  {
    "Team 1": "West Indies",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "52 runs",
    "Ground": "Roseau",
    "Match Date": "Jul 26, 2009"
  },
  {
    "Team 1": "West Indies",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "3 wickets",
    "Ground": "Roseau",
    "Match Date": "Jul 28, 2009"
  },
  {
    "Team 1": "West Indies",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "3 wickets",
    "Ground": "Basseterre",
    "Match Date": "Jul 31, 2009"
  },
  {
    "Team 1": "Zimbabwe",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "8 wickets",
    "Ground": "Bulawayo",
    "Match Date": "Aug 9, 2009"
  },
  {
    "Team 1": "Zimbabwe",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "49 runs",
    "Ground": "Bulawayo",
    "Match Date": "Aug 11, 2009"
  },
  {
    "Team 1": "Zimbabwe",
    "Team 2": "Bangladesh",
    "Winner": "Zimbabwe",
    "Margin": "69 runs",
    "Ground": "Bulawayo",
    "Match Date": "Aug 14, 2009"
  },
  {
    "Team 1": "Zimbabwe",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "4 wickets",
    "Ground": "Bulawayo",
    "Match Date": "Aug 16, 2009"
  },
  {
    "Team 1": "Zimbabwe",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "5 wickets",
    "Ground": "Bulawayo",
    "Match Date": "Aug 18, 2009"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Zimbabwe",
    "Margin": "5 wickets",
    "Ground": "Dhaka",
    "Match Date": "Oct 27, 2009"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Bangladesh",
    "Margin": "7 wickets",
    "Ground": "Dhaka",
    "Match Date": "Oct 29, 2009"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Bangladesh",
    "Margin": "4 wickets",
    "Ground": "Dhaka",
    "Match Date": "Oct 31, 2009"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Bangladesh",
    "Margin": "6 wickets",
    "Ground": "Chattogram",
    "Match Date": "Nov 3, 2009"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Bangladesh",
    "Margin": "1 wicket",
    "Ground": "Chattogram",
    "Match Date": "Nov 5, 2009"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Sri Lanka",
    "Winner": "Sri Lanka",
    "Margin": "7 wickets",
    "Ground": "Dhaka",
    "Match Date": "Jan 4, 2010"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "India",
    "Winner": "India",
    "Margin": "6 wickets",
    "Ground": "Dhaka",
    "Match Date": "Jan 7, 2010"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Sri Lanka",
    "Winner": "Sri Lanka",
    "Margin": "9 wickets",
    "Ground": "Dhaka",
    "Match Date": "Jan 8, 2010"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "India",
    "Winner": "India",
    "Margin": "6 wickets",
    "Ground": "Dhaka",
    "Match Date": "Jan 11, 2010"
  },
  {
    "Team 1": "New Zealand",
    "Team 2": "Bangladesh",
    "Winner": "New Zealand",
    "Margin": "146 runs",
    "Ground": "Napier",
    "Match Date": "Feb 5, 2010"
  },
  {
    "Team 1": "New Zealand",
    "Team 2": "Bangladesh",
    "Winner": "New Zealand",
    "Margin": "5 wickets",
    "Ground": "Dunedin",
    "Match Date": "Feb 8, 2010"
  },
  {
    "Team 1": "New Zealand",
    "Team 2": "Bangladesh",
    "Winner": "New Zealand",
    "Margin": "3 wickets",
    "Ground": "Christchurch",
    "Match Date": "Feb 11, 2010"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "England",
    "Winner": "England",
    "Margin": "6 wickets",
    "Ground": "Dhaka",
    "Match Date": "Feb 28, 2010"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "England",
    "Winner": "England",
    "Margin": "2 wickets",
    "Ground": "Dhaka",
    "Match Date": "Mar 2, 2010"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "England",
    "Winner": "England",
    "Margin": "45 runs",
    "Ground": "Chattogram",
    "Match Date": "Mar 5, 2010"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "India",
    "Winner": "India",
    "Margin": "6 wickets",
    "Ground": "Dambulla",
    "Match Date": "Jun 16, 2010"
  },
  {
    "Team 1": "Sri Lanka",
    "Team 2": "Bangladesh",
    "Winner": "Sri Lanka",
    "Margin": "126 runs",
    "Ground": "Dambulla",
    "Match Date": "Jun 18, 2010"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Pakistan",
    "Winner": "Pakistan",
    "Margin": "139 runs",
    "Ground": "Dambulla",
    "Match Date": "Jun 21, 2010"
  },
  {
    "Team 1": "England",
    "Team 2": "Bangladesh",
    "Winner": "England",
    "Margin": "6 wickets",
    "Ground": "Nottingham",
    "Match Date": "Jul 8, 2010"
  },
  {
    "Team 1": "England",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "5 runs",
    "Ground": "Bristol",
    "Match Date": "Jul 10, 2010"
  },
  {
    "Team 1": "England",
    "Team 2": "Bangladesh",
    "Winner": "England",
    "Margin": "144 runs",
    "Ground": "Birmingham",
    "Match Date": "Jul 12, 2010"
  },
  {
    "Team 1": "Ireland",
    "Team 2": "Bangladesh",
    "Winner": "Ireland",
    "Margin": "7 wickets",
    "Ground": "Belfast",
    "Match Date": "Jul 15, 2010"
  },
  {
    "Team 1": "Ireland",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "6 wickets",
    "Ground": "Belfast",
    "Match Date": "Jul 16, 2010"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Netherlands",
    "Winner": "Netherlands",
    "Margin": "6 wickets",
    "Ground": "Glasgow",
    "Match Date": "Jul 20, 2010"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "New Zealand",
    "Winner": "Bangladesh",
    "Margin": "9 runs",
    "Ground": "Dhaka",
    "Match Date": "Oct 5, 2010"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "New Zealand",
    "Winner": "Bangladesh",
    "Margin": "7 wickets",
    "Ground": "Dhaka",
    "Match Date": "Oct 11, 2010"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "New Zealand",
    "Winner": "Bangladesh",
    "Margin": "9 runs",
    "Ground": "Dhaka",
    "Match Date": "Oct 14, 2010"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "New Zealand",
    "Winner": "Bangladesh",
    "Margin": "3 runs",
    "Ground": "Dhaka",
    "Match Date": "Oct 17, 2010"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Zimbabwe",
    "Margin": "9 runs",
    "Ground": "Dhaka",
    "Match Date": "Dec 1, 2010"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Bangladesh",
    "Margin": "6 wickets",
    "Ground": "Dhaka",
    "Match Date": "Dec 3, 2010"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Bangladesh",
    "Margin": "65 runs",
    "Ground": "Dhaka",
    "Match Date": "Dec 6, 2010"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Bangladesh",
    "Margin": "6 wickets",
    "Ground": "Chattogram",
    "Match Date": "Dec 12, 2010"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "India",
    "Winner": "India",
    "Margin": "87 runs",
    "Ground": "Dhaka",
    "Match Date": "Feb 19, 2011"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Ireland",
    "Winner": "Bangladesh",
    "Margin": "27 runs",
    "Ground": "Dhaka",
    "Match Date": "Feb 25, 2011"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "West Indies",
    "Winner": "West Indies",
    "Margin": "9 wickets",
    "Ground": "Dhaka",
    "Match Date": "Mar 4, 2011"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "England",
    "Winner": "Bangladesh",
    "Margin": "2 wickets",
    "Ground": "Chattogram",
    "Match Date": "Mar 11, 2011"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Netherlands",
    "Winner": "Bangladesh",
    "Margin": "6 wickets",
    "Ground": "Chattogram",
    "Match Date": "Mar 14, 2011"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "South Africa",
    "Winner": "South Africa",
    "Margin": "206 runs",
    "Ground": "Dhaka",
    "Match Date": "Mar 19, 2011"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Australia",
    "Winner": "Australia",
    "Margin": "60 runs",
    "Ground": "Dhaka",
    "Match Date": "Apr 9, 2011"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Australia",
    "Winner": "Australia",
    "Margin": "9 wickets",
    "Ground": "Dhaka",
    "Match Date": "Apr 11, 2011"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Australia",
    "Winner": "Australia",
    "Margin": "66 runs",
    "Ground": "Dhaka",
    "Match Date": "Apr 13, 2011"
  },
  {
    "Team 1": "Zimbabwe",
    "Team 2": "Bangladesh",
    "Winner": "Zimbabwe",
    "Margin": "4 wickets",
    "Ground": "Harare",
    "Match Date": "Aug 12, 2011"
  },
  {
    "Team 1": "Zimbabwe",
    "Team 2": "Bangladesh",
    "Winner": "Zimbabwe",
    "Margin": "7 wickets",
    "Ground": "Harare",
    "Match Date": "Aug 14, 2011"
  },
  {
    "Team 1": "Zimbabwe",
    "Team 2": "Bangladesh",
    "Winner": "Zimbabwe",
    "Margin": "5 runs",
    "Ground": "Harare",
    "Match Date": "Aug 16, 2011"
  },
  {
    "Team 1": "Zimbabwe",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "6 wickets",
    "Ground": "Bulawayo",
    "Match Date": "Aug 19, 2011"
  },
  {
    "Team 1": "Zimbabwe",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "93 runs",
    "Ground": "Bulawayo",
    "Match Date": "Aug 21, 2011"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "West Indies",
    "Winner": "West Indies",
    "Margin": "40 runs",
    "Ground": "Dhaka",
    "Match Date": "Oct 13, 2011"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "West Indies",
    "Winner": "West Indies",
    "Margin": "8 wickets",
    "Ground": "Dhaka",
    "Match Date": "Oct 15, 2011"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "West Indies",
    "Winner": "Bangladesh",
    "Margin": "8 wickets",
    "Ground": "Chattogram",
    "Match Date": "Oct 18, 2011"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Pakistan",
    "Winner": "Pakistan",
    "Margin": "5 wickets",
    "Ground": "Dhaka",
    "Match Date": "Dec 1, 2011"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Pakistan",
    "Winner": "Pakistan",
    "Margin": "76 runs",
    "Ground": "Dhaka",
    "Match Date": "Dec 3, 2011"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Pakistan",
    "Winner": "Pakistan",
    "Margin": "58 runs",
    "Ground": "Chattogram",
    "Match Date": "Dec 6, 2011"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Pakistan",
    "Winner": "Pakistan",
    "Margin": "21 runs",
    "Ground": "Dhaka",
    "Match Date": "Mar 11, 2012"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "India",
    "Winner": "Bangladesh",
    "Margin": "5 wickets",
    "Ground": "Dhaka",
    "Match Date": "Mar 16, 2012"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Sri Lanka",
    "Winner": "Bangladesh",
    "Margin": "5 wickets",
    "Ground": "Dhaka",
    "Match Date": "Mar 20, 2012"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Pakistan",
    "Winner": "Pakistan",
    "Margin": "2 runs",
    "Ground": "Dhaka",
    "Match Date": "Mar 22, 2012"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "West Indies",
    "Winner": "Bangladesh",
    "Margin": "7 wickets",
    "Ground": "Khulna",
    "Match Date": "Nov 30, 2012"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "West Indies",
    "Winner": "Bangladesh",
    "Margin": "160 runs",
    "Ground": "Khulna",
    "Match Date": "Dec 2, 2012"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "West Indies",
    "Winner": "West Indies",
    "Margin": "4 wickets",
    "Ground": "Dhaka",
    "Match Date": "Dec 5, 2012"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "West Indies",
    "Winner": "West Indies",
    "Margin": "75 runs",
    "Ground": "Dhaka",
    "Match Date": "Dec 7, 2012"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "West Indies",
    "Winner": "Bangladesh",
    "Margin": "2 wickets",
    "Ground": "Dhaka",
    "Match Date": "Dec 8, 2012"
  },
  {
    "Team 1": "Sri Lanka",
    "Team 2": "Bangladesh",
    "Winner": "Sri Lanka",
    "Margin": "8 wickets",
    "Ground": "Hambantota",
    "Match Date": "Mar 23, 2013"
  },
  {
    "Team 1": "Sri Lanka",
    "Team 2": "Bangladesh",
    "Winner": "no result",
    "Margin": "",
    "Ground": "Hambantota",
    "Match Date": "Mar 25, 2013"
  },
  {
    "Team 1": "Sri Lanka",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "3 wickets",
    "Ground": "Pallekele",
    "Match Date": "Mar 28, 2013"
  },
  {
    "Team 1": "Zimbabwe",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "121 runs",
    "Ground": "Bulawayo",
    "Match Date": "May 3, 2013"
  },
  {
    "Team 1": "Zimbabwe",
    "Team 2": "Bangladesh",
    "Winner": "Zimbabwe",
    "Margin": "6 wickets",
    "Ground": "Bulawayo",
    "Match Date": "May 5, 2013"
  },
  {
    "Team 1": "Zimbabwe",
    "Team 2": "Bangladesh",
    "Winner": "Zimbabwe",
    "Margin": "7 wickets",
    "Ground": "Bulawayo",
    "Match Date": "May 8, 2013"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "New Zealand",
    "Winner": "Bangladesh",
    "Margin": "43 runs",
    "Ground": "Dhaka",
    "Match Date": "Oct 29, 2013"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "New Zealand",
    "Winner": "Bangladesh",
    "Margin": "40 runs",
    "Ground": "Dhaka",
    "Match Date": "Oct 31, 2013"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "New Zealand",
    "Winner": "Bangladesh",
    "Margin": "4 wickets",
    "Ground": "Fatullah",
    "Match Date": "Nov 3, 2013"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Sri Lanka",
    "Winner": "Sri Lanka",
    "Margin": "13 runs",
    "Ground": "Dhaka",
    "Match Date": "Feb 17, 2014"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Sri Lanka",
    "Winner": "Sri Lanka",
    "Margin": "61 runs",
    "Ground": "Dhaka",
    "Match Date": "Feb 20, 2014"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Sri Lanka",
    "Winner": "Sri Lanka",
    "Margin": "6 wickets",
    "Ground": "Dhaka",
    "Match Date": "Feb 22, 2014"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "India",
    "Winner": "India",
    "Margin": "6 wickets",
    "Ground": "Fatullah",
    "Match Date": "Feb 26, 2014"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Afghanistan",
    "Winner": "Afghanistan",
    "Margin": "32 runs",
    "Ground": "Fatullah",
    "Match Date": "Mar 1, 2014"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Pakistan",
    "Winner": "Pakistan",
    "Margin": "3 wickets",
    "Ground": "Dhaka",
    "Match Date": "Mar 4, 2014"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Sri Lanka",
    "Winner": "Sri Lanka",
    "Margin": "3 wickets",
    "Ground": "Dhaka",
    "Match Date": "Mar 6, 2014"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "India",
    "Winner": "India",
    "Margin": "7 wickets",
    "Ground": "Dhaka",
    "Match Date": "Jun 15, 2014"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "India",
    "Winner": "India",
    "Margin": "47 runs",
    "Ground": "Dhaka",
    "Match Date": "Jun 17, 2014"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "India",
    "Winner": "no result",
    "Margin": "",
    "Ground": "Dhaka",
    "Match Date": "Jun 19, 2014"
  },
  {
    "Team 1": "West Indies",
    "Team 2": "Bangladesh",
    "Winner": "West Indies",
    "Margin": "3 wickets",
    "Ground": "St George's",
    "Match Date": "Aug 20, 2014"
  },
  {
    "Team 1": "West Indies",
    "Team 2": "Bangladesh",
    "Winner": "West Indies",
    "Margin": "177 runs",
    "Ground": "St George's",
    "Match Date": "Aug 22, 2014"
  },
  {
    "Team 1": "West Indies",
    "Team 2": "Bangladesh",
    "Winner": "West Indies",
    "Margin": "91 runs",
    "Ground": "Basseterre",
    "Match Date": "Aug 25, 2014"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Bangladesh",
    "Margin": "87 runs",
    "Ground": "Chattogram",
    "Match Date": "Nov 21, 2014"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Bangladesh",
    "Margin": "68 runs",
    "Ground": "Chattogram",
    "Match Date": "Nov 23, 2014"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Bangladesh",
    "Margin": "124 runs",
    "Ground": "Dhaka",
    "Match Date": "Nov 26, 2014"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Bangladesh",
    "Margin": "21 runs",
    "Ground": "Dhaka",
    "Match Date": "Nov 28, 2014"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Bangladesh",
    "Margin": "5 wickets",
    "Ground": "Dhaka",
    "Match Date": "Dec 1, 2014"
  },
  {
    "Team 1": "Afghanistan",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "105 runs",
    "Ground": "Canberra",
    "Match Date": "Feb 18, 2015"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Sri Lanka",
    "Winner": "Sri Lanka",
    "Margin": "92 runs",
    "Ground": "Melbourne",
    "Match Date": "Feb 26, 2015"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Scotland",
    "Winner": "Bangladesh",
    "Margin": "6 wickets",
    "Ground": "Nelson",
    "Match Date": "Mar 5, 2015"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "England",
    "Winner": "Bangladesh",
    "Margin": "15 runs",
    "Ground": "Adelaide",
    "Match Date": "Mar 9, 2015"
  },
  {
    "Team 1": "New Zealand",
    "Team 2": "Bangladesh",
    "Winner": "New Zealand",
    "Margin": "3 wickets",
    "Ground": "Hamilton",
    "Match Date": "Mar 13, 2015"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "India",
    "Winner": "India",
    "Margin": "109 runs",
    "Ground": "Melbourne",
    "Match Date": "Mar 19, 2015"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Pakistan",
    "Winner": "Bangladesh",
    "Margin": "79 runs",
    "Ground": "Dhaka",
    "Match Date": "Apr 17, 2015"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Pakistan",
    "Winner": "Bangladesh",
    "Margin": "7 wickets",
    "Ground": "Dhaka",
    "Match Date": "Apr 19, 2015"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Pakistan",
    "Winner": "Bangladesh",
    "Margin": "8 wickets",
    "Ground": "Dhaka",
    "Match Date": "Apr 22, 2015"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "India",
    "Winner": "Bangladesh",
    "Margin": "79 runs",
    "Ground": "Dhaka",
    "Match Date": "Jun 18, 2015"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "India",
    "Winner": "Bangladesh",
    "Margin": "6 wickets",
    "Ground": "Dhaka",
    "Match Date": "Jun 21, 2015"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "India",
    "Winner": "India",
    "Margin": "77 runs",
    "Ground": "Dhaka",
    "Match Date": "Jun 24, 2015"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "South Africa",
    "Winner": "South Africa",
    "Margin": "8 wickets",
    "Ground": "Dhaka",
    "Match Date": "Jul 10, 2015"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "South Africa",
    "Winner": "Bangladesh",
    "Margin": "7 wickets",
    "Ground": "Dhaka",
    "Match Date": "Jul 12, 2015"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "South Africa",
    "Winner": "Bangladesh",
    "Margin": "9 wickets",
    "Ground": "Chattogram",
    "Match Date": "Jul 15, 2015"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Bangladesh",
    "Margin": "145 runs",
    "Ground": "Dhaka",
    "Match Date": "Nov 7, 2015"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Bangladesh",
    "Margin": "58 runs",
    "Ground": "Dhaka",
    "Match Date": "Nov 9, 2015"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Bangladesh",
    "Margin": "61 runs",
    "Ground": "Dhaka",
    "Match Date": "Nov 11, 2015"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Afghanistan",
    "Winner": "Bangladesh",
    "Margin": "7 runs",
    "Ground": "Dhaka",
    "Match Date": "Sep 25, 2016"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Afghanistan",
    "Winner": "Afghanistan",
    "Margin": "2 wickets",
    "Ground": "Dhaka",
    "Match Date": "Sep 28, 2016"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Afghanistan",
    "Winner": "Bangladesh",
    "Margin": "141 runs",
    "Ground": "Dhaka",
    "Match Date": "Oct 1, 2016"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "England",
    "Winner": "England",
    "Margin": "21 runs",
    "Ground": "Dhaka",
    "Match Date": "Oct 7, 2016"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "England",
    "Winner": "Bangladesh",
    "Margin": "34 runs",
    "Ground": "Dhaka",
    "Match Date": "Oct 9, 2016"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "England",
    "Winner": "England",
    "Margin": "4 wickets",
    "Ground": "Chattogram",
    "Match Date": "Oct 12, 2016"
  },
  {
    "Team 1": "New Zealand",
    "Team 2": "Bangladesh",
    "Winner": "New Zealand",
    "Margin": "77 runs",
    "Ground": "Christchurch",
    "Match Date": "Dec 26, 2016"
  },
  {
    "Team 1": "New Zealand",
    "Team 2": "Bangladesh",
    "Winner": "New Zealand",
    "Margin": "67 runs",
    "Ground": "Nelson",
    "Match Date": "Dec 29, 2016"
  },
  {
    "Team 1": "New Zealand",
    "Team 2": "Bangladesh",
    "Winner": "New Zealand",
    "Margin": "8 wickets",
    "Ground": "Nelson",
    "Match Date": "Dec 31, 2016"
  },
  {
    "Team 1": "Sri Lanka",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "90 runs",
    "Ground": "Dambulla",
    "Match Date": "Mar 25, 2017"
  },
  {
    "Team 1": "Sri Lanka",
    "Team 2": "Bangladesh",
    "Winner": "no result",
    "Margin": "",
    "Ground": "Dambulla",
    "Match Date": "Mar 28, 2017"
  },
  {
    "Team 1": "Sri Lanka",
    "Team 2": "Bangladesh",
    "Winner": "Sri Lanka",
    "Margin": "70 runs",
    "Ground": "Colombo (SSC)",
    "Match Date": "Apr 1, 2017"
  },
  {
    "Team 1": "Ireland",
    "Team 2": "Bangladesh",
    "Winner": "no result",
    "Margin": "",
    "Ground": "Dublin (Malahide)",
    "Match Date": "May 12, 2017"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "New Zealand",
    "Winner": "New Zealand",
    "Margin": "4 wickets",
    "Ground": "Dublin",
    "Match Date": "May 17, 2017"
  },
  {
    "Team 1": "Ireland",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "8 wickets",
    "Ground": "Dublin (Malahide)",
    "Match Date": "May 19, 2017"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "New Zealand",
    "Winner": "Bangladesh",
    "Margin": "5 wickets",
    "Ground": "Dublin",
    "Match Date": "May 24, 2017"
  },
  {
    "Team 1": "England",
    "Team 2": "Bangladesh",
    "Winner": "England",
    "Margin": "8 wickets",
    "Ground": "The Oval",
    "Match Date": "Jun 1, 2017"
  },
  {
    "Team 1": "Australia",
    "Team 2": "Bangladesh",
    "Winner": "no result",
    "Margin": "",
    "Ground": "The Oval",
    "Match Date": "Jun 5, 2017"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "New Zealand",
    "Winner": "Bangladesh",
    "Margin": "5 wickets",
    "Ground": "Cardiff",
    "Match Date": "Jun 9, 2017"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "India",
    "Winner": "India",
    "Margin": "9 wickets",
    "Ground": "Birmingham",
    "Match Date": "Jun 15, 2017"
  },
  {
    "Team 1": "South Africa",
    "Team 2": "Bangladesh",
    "Winner": "South Africa",
    "Margin": "10 wickets",
    "Ground": "Kimberley",
    "Match Date": "Oct 15, 2017"
  },
  {
    "Team 1": "South Africa",
    "Team 2": "Bangladesh",
    "Winner": "South Africa",
    "Margin": "104 runs",
    "Ground": "Paarl",
    "Match Date": "Oct 18, 2017"
  },
  {
    "Team 1": "South Africa",
    "Team 2": "Bangladesh",
    "Winner": "South Africa",
    "Margin": "200 runs",
    "Ground": "East London",
    "Match Date": "Oct 22, 2017"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Bangladesh",
    "Margin": "8 wickets",
    "Ground": "Dhaka",
    "Match Date": "Jan 15, 2018"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Sri Lanka",
    "Winner": "Bangladesh",
    "Margin": "163 runs",
    "Ground": "Dhaka",
    "Match Date": "Jan 19, 2018"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Bangladesh",
    "Margin": "91 runs",
    "Ground": "Dhaka",
    "Match Date": "Jan 23, 2018"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Sri Lanka",
    "Winner": "Sri Lanka",
    "Margin": "10 wickets",
    "Ground": "Dhaka",
    "Match Date": "Jan 25, 2018"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Sri Lanka",
    "Winner": "Sri Lanka",
    "Margin": "79 runs",
    "Ground": "Dhaka",
    "Match Date": "Jan 27, 2018"
  },
  {
    "Team 1": "West Indies",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "48 runs",
    "Ground": "Providence",
    "Match Date": "Jul 22, 2018"
  },
  {
    "Team 1": "West Indies",
    "Team 2": "Bangladesh",
    "Winner": "West Indies",
    "Margin": "3 runs",
    "Ground": "Providence",
    "Match Date": "Jul 25, 2018"
  },
  {
    "Team 1": "West Indies",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "18 runs",
    "Ground": "Basseterre",
    "Match Date": "Jul 28, 2018"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Sri Lanka",
    "Winner": "Bangladesh",
    "Margin": "137 runs",
    "Ground": "Dubai (DSC)",
    "Match Date": "Sep 15, 2018"
  },
  {
    "Team 1": "Afghanistan",
    "Team 2": "Bangladesh",
    "Winner": "Afghanistan",
    "Margin": "136 runs",
    "Ground": "Abu Dhabi",
    "Match Date": "Sep 20, 2018"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "India",
    "Winner": "India",
    "Margin": "7 wickets",
    "Ground": "Dubai (DSC)",
    "Match Date": "Sep 21, 2018"
  },
  {
    "Team 1": "Afghanistan",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "3 runs",
    "Ground": "Abu Dhabi",
    "Match Date": "Sep 23, 2018"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Pakistan",
    "Winner": "Bangladesh",
    "Margin": "37 runs",
    "Ground": "Abu Dhabi",
    "Match Date": "Sep 26, 2018"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "India",
    "Winner": "India",
    "Margin": "3 wickets",
    "Ground": "Dubai (DSC)",
    "Match Date": "Sep 28, 2018"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Bangladesh",
    "Margin": "28 runs",
    "Ground": "Dhaka",
    "Match Date": "Oct 21, 2018"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Bangladesh",
    "Margin": "7 wickets",
    "Ground": "Chattogram",
    "Match Date": "Oct 24, 2018"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Bangladesh",
    "Margin": "7 wickets",
    "Ground": "Chattogram",
    "Match Date": "Oct 26, 2018"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "West Indies",
    "Winner": "Bangladesh",
    "Margin": "5 wickets",
    "Ground": "Dhaka",
    "Match Date": "Dec 9, 2018"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "West Indies",
    "Winner": "West Indies",
    "Margin": "4 wickets",
    "Ground": "Dhaka",
    "Match Date": "Dec 11, 2018"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "West Indies",
    "Winner": "Bangladesh",
    "Margin": "8 wickets",
    "Ground": "Sylhet",
    "Match Date": "Dec 14, 2018"
  },
  {
    "Team 1": "New Zealand",
    "Team 2": "Bangladesh",
    "Winner": "New Zealand",
    "Margin": "8 wickets",
    "Ground": "Napier",
    "Match Date": "Feb 13, 2019"
  },
  {
    "Team 1": "New Zealand",
    "Team 2": "Bangladesh",
    "Winner": "New Zealand",
    "Margin": "8 wickets",
    "Ground": "Christchurch",
    "Match Date": "Feb 16, 2019"
  },
  {
    "Team 1": "New Zealand",
    "Team 2": "Bangladesh",
    "Winner": "New Zealand",
    "Margin": "88 runs",
    "Ground": "Dunedin",
    "Match Date": "Feb 20, 2019"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "West Indies",
    "Winner": "Bangladesh",
    "Margin": "8 wickets",
    "Ground": "Dublin",
    "Match Date": "May 7, 2019"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "West Indies",
    "Winner": "Bangladesh",
    "Margin": "5 wickets",
    "Ground": "Dublin (Malahide)",
    "Match Date": "May 13, 2019"
  },
  {
    "Team 1": "Ireland",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "6 wickets",
    "Ground": "Dublin",
    "Match Date": "May 15, 2019"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "West Indies",
    "Winner": "Bangladesh",
    "Margin": "5 wickets",
    "Ground": "Dublin (Malahide)",
    "Match Date": "May 17, 2019"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "South Africa",
    "Winner": "Bangladesh",
    "Margin": "21 runs",
    "Ground": "The Oval",
    "Match Date": "Jun 2, 2019"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "New Zealand",
    "Winner": "New Zealand",
    "Margin": "2 wickets",
    "Ground": "The Oval",
    "Match Date": "Jun 5, 2019"
  },
  {
    "Team 1": "England",
    "Team 2": "Bangladesh",
    "Winner": "England",
    "Margin": "106 runs",
    "Ground": "Cardiff",
    "Match Date": "Jun 8, 2019"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "West Indies",
    "Winner": "Bangladesh",
    "Margin": "7 wickets",
    "Ground": "Taunton",
    "Match Date": "Jun 17, 2019"
  },
  {
    "Team 1": "Australia",
    "Team 2": "Bangladesh",
    "Winner": "Australia",
    "Margin": "48 runs",
    "Ground": "Nottingham",
    "Match Date": "Jun 20, 2019"
  },
  {
    "Team 1": "Afghanistan",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "62 runs",
    "Ground": "Southampton",
    "Match Date": "Jun 24, 2019"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "India",
    "Winner": "India",
    "Margin": "28 runs",
    "Ground": "Birmingham",
    "Match Date": "Jul 2, 2019"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Pakistan",
    "Winner": "Pakistan",
    "Margin": "94 runs",
    "Ground": "Lord's",
    "Match Date": "Jul 5, 2019"
  }
]

var t20DataList = [
  {
    "Team 1": "Bangladesh",
    "Team 2": "India",
    "Winner": "India",
    "Margin": "25 runs",
    "Ground": "Nottingham",
    "Match Date": "Jun 6, 2009"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Ireland",
    "Winner": "Ireland",
    "Margin": "6 wickets",
    "Ground": "Nottingham",
    "Match Date": "Jun 8, 2009"
  },
  {
    "Team 1": "West Indies",
    "Team 2": "Bangladesh",
    "Winner": "West Indies",
    "Margin": "5 wickets",
    "Ground": "Basseterre",
    "Match Date": "Aug 2, 2009"
  },
  {
    "Team 1": "New Zealand",
    "Team 2": "Bangladesh",
    "Winner": "New Zealand",
    "Margin": "10 wickets",
    "Ground": "Hamilton",
    "Match Date": "Feb 3, 2010"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Pakistan",
    "Winner": "Pakistan",
    "Margin": "21 runs",
    "Ground": "Gros Islet",
    "Match Date": "May 1, 2010"
  },
  {
    "Team 1": "Australia",
    "Team 2": "Bangladesh",
    "Winner": "Australia",
    "Margin": "27 runs",
    "Ground": "Bridgetown",
    "Match Date": "May 5, 2010"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "West Indies",
    "Winner": "Bangladesh",
    "Margin": "3 wickets",
    "Ground": "Dhaka",
    "Match Date": "Oct 11, 2011"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Pakistan",
    "Winner": "Pakistan",
    "Margin": "50 runs",
    "Ground": "Dhaka",
    "Match Date": "Nov 29, 2011"
  },
  {
    "Team 1": "Ireland",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "71 runs",
    "Ground": "Belfast",
    "Match Date": "Jul 18, 2012"
  },
  {
    "Team 1": "Ireland",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "1 run",
    "Ground": "Belfast",
    "Match Date": "Jul 20, 2012"
  },
  {
    "Team 1": "Ireland",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "2 wickets",
    "Ground": "Belfast",
    "Match Date": "Jul 21, 2012"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Scotland",
    "Winner": "Scotland",
    "Margin": "34 runs",
    "Ground": "The Hague",
    "Match Date": "Jul 24, 2012"
  },
  {
    "Team 1": "Netherlands",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "8 wickets",
    "Ground": "The Hague",
    "Match Date": "Jul 25, 2012"
  },
  {
    "Team 1": "Netherlands",
    "Team 2": "Bangladesh",
    "Winner": "Netherlands",
    "Margin": "1 wicket",
    "Ground": "The Hague",
    "Match Date": "Jul 26, 2012"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "New Zealand",
    "Winner": "New Zealand",
    "Margin": "59 runs",
    "Ground": "Pallekele",
    "Match Date": "Sep 21, 2012"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Pakistan",
    "Winner": "Pakistan",
    "Margin": "8 wickets",
    "Ground": "Pallekele",
    "Match Date": "Sep 25, 2012"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "West Indies",
    "Winner": "West Indies",
    "Margin": "18 runs",
    "Ground": "Dhaka",
    "Match Date": "Dec 10, 2012"
  },
  {
    "Team 1": "Sri Lanka",
    "Team 2": "Bangladesh",
    "Winner": "Sri Lanka",
    "Margin": "17 runs",
    "Ground": "Pallekele",
    "Match Date": "Mar 31, 2013"
  },
  {
    "Team 1": "Zimbabwe",
    "Team 2": "Bangladesh",
    "Winner": "Zimbabwe",
    "Margin": "6 runs",
    "Ground": "Bulawayo",
    "Match Date": "May 11, 2013"
  },
  {
    "Team 1": "Zimbabwe",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "34 runs",
    "Ground": "Bulawayo",
    "Match Date": "May 12, 2013"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "New Zealand",
    "Winner": "New Zealand",
    "Margin": "15 runs",
    "Ground": "Dhaka",
    "Match Date": "Nov 6, 2013"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Sri Lanka",
    "Winner": "Sri Lanka",
    "Margin": "2 runs",
    "Ground": "Chattogram",
    "Match Date": "Feb 12, 2014"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Sri Lanka",
    "Winner": "Sri Lanka",
    "Margin": "3 wickets",
    "Ground": "Chattogram",
    "Match Date": "Feb 14, 2014"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Afghanistan",
    "Winner": "Bangladesh",
    "Margin": "9 wickets",
    "Ground": "Dhaka",
    "Match Date": "Mar 16, 2014"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Nepal",
    "Winner": "Bangladesh",
    "Margin": "8 wickets",
    "Ground": "Chattogram",
    "Match Date": "Mar 18, 2014"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Hong Kong",
    "Winner": "Hong Kong",
    "Margin": "2 wickets",
    "Ground": "Chattogram",
    "Match Date": "Mar 20, 2014"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "West Indies",
    "Winner": "West Indies",
    "Margin": "73 runs",
    "Ground": "Dhaka",
    "Match Date": "Mar 25, 2014"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "India",
    "Winner": "India",
    "Margin": "8 wickets",
    "Ground": "Dhaka",
    "Match Date": "Mar 28, 2014"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Pakistan",
    "Winner": "Pakistan",
    "Margin": "50 runs",
    "Ground": "Dhaka",
    "Match Date": "Mar 30, 2014"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Australia",
    "Winner": "Australia",
    "Margin": "7 wickets",
    "Ground": "Dhaka",
    "Match Date": "Apr 1, 2014"
  },
  {
    "Team 1": "West Indies",
    "Team 2": "Bangladesh",
    "Winner": "no result",
    "Margin": "",
    "Ground": "Basseterre",
    "Match Date": "Aug 27, 2014"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Pakistan",
    "Winner": "Bangladesh",
    "Margin": "7 wickets",
    "Ground": "Dhaka",
    "Match Date": "Apr 24, 2015"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "South Africa",
    "Winner": "South Africa",
    "Margin": "52 runs",
    "Ground": "Dhaka",
    "Match Date": "Jul 5, 2015"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "South Africa",
    "Winner": "South Africa",
    "Margin": "31 runs",
    "Ground": "Dhaka",
    "Match Date": "Jul 7, 2015"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Bangladesh",
    "Margin": "4 wickets",
    "Ground": "Dhaka",
    "Match Date": "Nov 13, 2015"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Zimbabwe",
    "Margin": "3 wickets",
    "Ground": "Dhaka",
    "Match Date": "Nov 15, 2015"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Bangladesh",
    "Margin": "4 wickets",
    "Ground": "Khulna",
    "Match Date": "Jan 15, 2016"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Bangladesh",
    "Margin": "42 runs",
    "Ground": "Khulna",
    "Match Date": "Jan 17, 2016"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Zimbabwe",
    "Margin": "31 runs",
    "Ground": "Khulna",
    "Match Date": "Jan 20, 2016"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Zimbabwe",
    "Winner": "Zimbabwe",
    "Margin": "18 runs",
    "Ground": "Khulna",
    "Match Date": "Jan 22, 2016"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "India",
    "Winner": "India",
    "Margin": "45 runs",
    "Ground": "Dhaka",
    "Match Date": "Feb 24, 2016"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "U.A.E.",
    "Winner": "Bangladesh",
    "Margin": "51 runs",
    "Ground": "Dhaka",
    "Match Date": "Feb 26, 2016"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Sri Lanka",
    "Winner": "Bangladesh",
    "Margin": "23 runs",
    "Ground": "Dhaka",
    "Match Date": "Feb 28, 2016"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Pakistan",
    "Winner": "Bangladesh",
    "Margin": "5 wickets",
    "Ground": "Dhaka",
    "Match Date": "Mar 2, 2016"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "India",
    "Winner": "India",
    "Margin": "8 wickets",
    "Ground": "Dhaka",
    "Match Date": "Mar 6, 2016"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Netherlands",
    "Winner": "Bangladesh",
    "Margin": "8 runs",
    "Ground": "Dharamsala",
    "Match Date": "Mar 9, 2016"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Ireland",
    "Winner": "no result",
    "Margin": "",
    "Ground": "Dharamsala",
    "Match Date": "Mar 11, 2016"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Oman",
    "Winner": "Bangladesh",
    "Margin": "54 runs",
    "Ground": "Dharamsala",
    "Match Date": "Mar 13, 2016"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Pakistan",
    "Winner": "Pakistan",
    "Margin": "55 runs",
    "Ground": "Kolkata",
    "Match Date": "Mar 16, 2016"
  },
  {
    "Team 1": "Australia",
    "Team 2": "Bangladesh",
    "Winner": "Australia",
    "Margin": "3 wickets",
    "Ground": "Bengaluru",
    "Match Date": "Mar 21, 2016"
  },
  {
    "Team 1": "India",
    "Team 2": "Bangladesh",
    "Winner": "India",
    "Margin": "1 run",
    "Ground": "Bengaluru",
    "Match Date": "Mar 23, 2016"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "New Zealand",
    "Winner": "New Zealand",
    "Margin": "75 runs",
    "Ground": "Kolkata",
    "Match Date": "Mar 26, 2016"
  },
  {
    "Team 1": "New Zealand",
    "Team 2": "Bangladesh",
    "Winner": "New Zealand",
    "Margin": "6 wickets",
    "Ground": "Napier",
    "Match Date": "Jan 3, 2017"
  },
  {
    "Team 1": "New Zealand",
    "Team 2": "Bangladesh",
    "Winner": "New Zealand",
    "Margin": "47 runs",
    "Ground": "Mount Maunganui",
    "Match Date": "Jan 6, 2017"
  },
  {
    "Team 1": "New Zealand",
    "Team 2": "Bangladesh",
    "Winner": "New Zealand",
    "Margin": "27 runs",
    "Ground": "Mount Maunganui",
    "Match Date": "Jan 8, 2017"
  },
  {
    "Team 1": "Sri Lanka",
    "Team 2": "Bangladesh",
    "Winner": "Sri Lanka",
    "Margin": "6 wickets",
    "Ground": "Colombo (RPS)",
    "Match Date": "Apr 4, 2017"
  },
  {
    "Team 1": "Sri Lanka",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "45 runs",
    "Ground": "Colombo (RPS)",
    "Match Date": "Apr 6, 2017"
  },
  {
    "Team 1": "South Africa",
    "Team 2": "Bangladesh",
    "Winner": "South Africa",
    "Margin": "20 runs",
    "Ground": "Bloemfontein",
    "Match Date": "Oct 26, 2017"
  },
  {
    "Team 1": "South Africa",
    "Team 2": "Bangladesh",
    "Winner": "South Africa",
    "Margin": "83 runs",
    "Ground": "Potchefstroom",
    "Match Date": "Oct 29, 2017"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Sri Lanka",
    "Winner": "Sri Lanka",
    "Margin": "6 wickets",
    "Ground": "Dhaka",
    "Match Date": "Feb 15, 2018"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "Sri Lanka",
    "Winner": "Sri Lanka",
    "Margin": "75 runs",
    "Ground": "Sylhet",
    "Match Date": "Feb 18, 2018"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "India",
    "Winner": "India",
    "Margin": "6 wickets",
    "Ground": "Colombo (RPS)",
    "Match Date": "Mar 8, 2018"
  },
  {
    "Team 1": "Sri Lanka",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "5 wickets",
    "Ground": "Colombo (RPS)",
    "Match Date": "Mar 10, 2018"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "India",
    "Winner": "India",
    "Margin": "17 runs",
    "Ground": "Colombo (RPS)",
    "Match Date": "Mar 14, 2018"
  },
  {
    "Team 1": "Sri Lanka",
    "Team 2": "Bangladesh",
    "Winner": "Bangladesh",
    "Margin": "2 wickets",
    "Ground": "Colombo (RPS)",
    "Match Date": "Mar 16, 2018"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "India",
    "Winner": "India",
    "Margin": "4 wickets",
    "Ground": "Colombo (RPS)",
    "Match Date": "Mar 18, 2018"
  },
  {
    "Team 1": "Afghanistan",
    "Team 2": "Bangladesh",
    "Winner": "Afghanistan",
    "Margin": "45 runs",
    "Ground": "Dehradun",
    "Match Date": "Jun 3, 2018"
  },
  {
    "Team 1": "Afghanistan",
    "Team 2": "Bangladesh",
    "Winner": "Afghanistan",
    "Margin": "6 wickets",
    "Ground": "Dehradun",
    "Match Date": "Jun 5, 2018"
  },
  {
    "Team 1": "Afghanistan",
    "Team 2": "Bangladesh",
    "Winner": "Afghanistan",
    "Margin": "1 run",
    "Ground": "Dehradun",
    "Match Date": "Jun 7, 2018"
  },
  {
    "Team 1": "West Indies",
    "Team 2": "Bangladesh",
    "Winner": "West Indies",
    "Margin": "7 wickets",
    "Ground": "Basseterre",
    "Match Date": "Jul 31, 2018"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "West Indies",
    "Winner": "Bangladesh",
    "Margin": "12 runs",
    "Ground": "Lauderhill",
    "Match Date": "Aug 4, 2018"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "West Indies",
    "Winner": "Bangladesh",
    "Margin": "19 runs",
    "Ground": "Lauderhill",
    "Match Date": "Aug 5, 2018"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "West Indies",
    "Winner": "West Indies",
    "Margin": "8 wickets",
    "Ground": "Sylhet",
    "Match Date": "Dec 17, 2018"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "West Indies",
    "Winner": "Bangladesh",
    "Margin": "36 runs",
    "Ground": "Dhaka",
    "Match Date": "Dec 20, 2018"
  },
  {
    "Team 1": "Bangladesh",
    "Team 2": "West Indies",
    "Winner": "West Indies",
    "Margin": "50 runs",
    "Ground": "Dhaka",
    "Match Date": "Dec 22, 2018"
  }
]

var processedOdiDataList = [];
var tempDateGroupTitle = "";
var sameMonthPlayedCount = 0;
var sameMonthWinCount = 0;

for(odiData of odiDataList) {

  var slicedMonth = odiData["Match Date"].slice(0, 3);
  var slicedYear = odiData["Match Date"].slice(-4);
  var slicedDate = slicedMonth + " " + slicedYear;

  if (tempDateGroupTitle == slicedDate) {

    sameMonthPlayedCount = sameMonthPlayedCount + 1;
    if (odiData["Winner"] === "Bangladesh") {
      sameMonthWinCount = sameMonthWinCount + 1;
    }

  } else {

    if (tempDateGroupTitle !== "") {
      processedOdiDataList.push({
        "title": tempDateGroupTitle,
        "played": sameMonthPlayedCount,
        "won": sameMonthWinCount,
        "winPercentage": ((sameMonthWinCount * 100) / sameMonthPlayedCount).toFixed(0),
        "lost": sameMonthPlayedCount - sameMonthWinCount,
        "lossPercentage": (((sameMonthPlayedCount - sameMonthWinCount) * 100) / sameMonthPlayedCount).toFixed(0)
      })
    }

    tempDateGroupTitle = slicedDate;
    sameMonthPlayedCount = 1;
    sameMonthWinCount = 0;
    if (odiData["Winner"] === "Bangladesh") {
      sameMonthWinCount = sameMonthWinCount + 1;
    }

  }

}

console.log(processedOdiDataList);

var processedT20DataList = [];
tempDateGroupTitle = "";
sameMonthPlayedCount = 0;
sameMonthWinCount = 0;

for(odiData of t20DataList) {

  var slicedMonth = odiData["Match Date"].slice(0, 3);
  var slicedYear = odiData["Match Date"].slice(-4);
  var slicedDate = slicedMonth + " " + slicedYear;

  if (tempDateGroupTitle == slicedDate) {

    sameMonthPlayedCount = sameMonthPlayedCount + 1;
    if (odiData["Winner"] === "Bangladesh") {
      sameMonthWinCount = sameMonthWinCount + 1;
    }

  } else {

    if (tempDateGroupTitle !== "") {
      processedT20DataList.push({
        "title": tempDateGroupTitle,
        "played": sameMonthPlayedCount,
        "won": sameMonthWinCount,
        "lost": sameMonthPlayedCount - sameMonthWinCount
      })
    }

    tempDateGroupTitle = slicedDate;
    sameMonthPlayedCount = 1;
    sameMonthWinCount = 0;
    if (odiData["Winner"] === "Bangladesh") {
      sameMonthWinCount = sameMonthWinCount + 1;
    }

  }

}

console.log(processedT20DataList);

// Start - Chart

var ctx = document.getElementById('odiChart');
var odiGraphLabel = processedOdiDataList.map(function(e) {
  return e.title;
});
var odiGraphData = processedOdiDataList.map(function(e) {
  return e.winPercentage;
});

var odiChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: odiGraphLabel,
      datasets: [{
          label: 'ODI Win %',
          data: odiGraphData,
          backgroundColor: [
              'rgba(0,128,0, 0.2)',
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
});