# 🎓 Student Attendance Management System

> **My College Project** - Government Polytechnic College, 2026  
> Building a real attendance tracking solution for our campus

---

## ⚠️ Project Authentication

**© 2026 - Original Work**  
**Developer**: [Prajapati Dixit K]  
**Enrollment No**: [236260316028]  
**College**: Government Polytechnic College  
**Semester**: [6th]  
**Department**: [Information Technology]  
**Project Guide**: [Prof.Chinkal Patel]
**Academic Year**: 2025-2026

> **⚠️ IMPORTANT**: This is an original academic project developed for college evaluation. Any unauthorized copying, reproduction, or plagiarism of this work is strictly prohibited and will be considered academic misconduct.

---

![App Poster](./app_poster.png)

---

## 📖 What This Project Is About

Hi! This is my college project where I'm building a **Student Attendance Management System** using mobile apps. The idea came from seeing how attendance is still tracked manually in our college using paper registers. I thought, why not make it digital?

### The Main Idea 💡

Create **two mobile apps**:
- **One for teachers** - to mark attendance easily from their phones
- **One for students** - to check their attendance anytime

Both apps connect to the same database, so everything stays in sync!

---

## 🎯 What Problem Am I Solving?

In our college, I noticed these issues:
- Teachers waste time calling out roll numbers
- Students don't know their attendance until results
- Paper registers can get lost or damaged
- Difficult to calculate attendance percentage
- No way to track attendance history

**My solution**: Make everything digital with mobile apps!

---

## 📱 What I'm Building

### Faculty App (For Teachers)
Teachers can:
- Login with their ID and password
- Pick a date from calendar
- Select their subject (Physics, Maths, etc.)
- Mark students as Present/Absent with simple toggles
- Students get automatically loaded from database
- Submit and done! Attendance saved

**Special feature**: Teachers have 3 days to edit if they made a mistake. After that, it locks automatically.

### Student App (For Students) 
Students can:
- Login with enrollment number
- See overall attendance percentage
- View calendar with color indicators:
  - 🟢 Green dates = Present
  - 🔴 Red dates = Absent
- Click any date to see which subject it was
- Get alerts if attendance drops below 75%

**Important**: Students can only VIEW, they cannot edit anything!

---

## 🛠️ Technologies I'm Learning

This project is helping me learn:

**Frontend (Mobile Apps)**
- React Native - for building mobile apps
- Expo - makes development easier
- JavaScript - programming language

**Backend (Server)**
- Supabase - handles database and user login
- PostgreSQL - stores all the data
- Row Level Security - keeps data safe

---

## 🗄️ Database I Designed

I created these tables in my database:

```
teachers table
├── teacher_id
├── name
├── email
└── faculty_id

students table
├── student_id
├── enrollment_number
├── name
├── semester
└── is_active

subjects table
├── subject_id
├── subject_name
├── semester
└── assigned_faculty

attendance table
├── attendance_id
├── student_id
├── subject_id
├── date
├── status (Present/Absent)
└── is_locked (auto-locks after 3 days)
```

---

## 🔐 Security Features

I'm implementing these security measures:
- Only teachers can mark attendance
- Only students can view their OWN attendance
- Students cannot see other students' data
- Teachers can only access their assigned subjects
- Auto-lock prevents editing old attendance
- Database-level security (Row Level Security)

---

## 📊 System Architecture

![System Flowchart](./system_flowchart.png)

The system has 4 layers:
1. **Apps Layer** - Faculty App & Student App
2. **Authentication** - Login with Supabase
3. **Security** - Row Level Security checks
4. **Database** - PostgreSQL stores everything

---

## 🚀 Project Status

| Task | Status |
|------|--------|
| Documentation | ✅ Done |
| Database Design | ✅ Done |
| Faculty App | 🔄 In Progress |
| Student App | ⏳ Planned |
| Testing | ⏳ Planned |

---

## 📂 Project Files

```
📦 Project Folder
├── 📄 README.md (this file)
├── 🖼️ app_poster.png (poster for presentation)
├── 🖼️ system_flowchart.png (architecture diagram)
├── 🌐 presentation.html (web presentation)
├── 🎨 presentation.css (presentation styling)
├── ⚡ presentation.js (presentation JavaScript)
└── 📁 docs/
    ├── FINAL_PRESENTATION.md (complete project details)
    ├── ARCHITECTURE.md (technical architecture)
    ├── DOCUMENTATION.md (full documentation)
    └── DATABASE_SCHEMA.md (database design)
```

---

## 💡 What I'm Learning

Through this project, I'm gaining experience in:
- Mobile app development (React Native)
- Database design and SQL
- User authentication and security
- API integration
- Version control with Git
- Creating professional documentation

---

## 🎓 Academic Info

**College**: Government Polytechnic College  
**Year**: 2026  
**Project Type**: Final Year Project / Academic Assignment  
**Supervisor**: [Professor Name]  
**Duration**: 8 weeks

---

## 📝 Documentation

All project documentation is in the `docs/` folder:
- **FINAL_PRESENTATION.md** - Complete project overview
- **ARCHITECTURE.md** - System architecture details  
- **DOCUMENTATION.md** - Technical specifications
- **DATABASE_SCHEMA.md** - Database schema with SQL

**Presentation Files:**
- Open `presentation.html` in browser for interactive presentation
- Includes all flowcharts, features, and explanations

---

## 🎯 Features Checklist

### Faculty App
- [x] Calendar-based attendance marking
- [x] Subject and semester selection
- [x] Student list auto-loading
- [x] Present/Absent toggle buttons
- [x] 3-day edit window
- [x] Auto-lock mechanism

### Student App
- [x] Login with enrollment number
- [x] Dashboard with attendance %
- [x] Calendar view with indicators
- [x] Low attendance alerts (<75%)
- [x] Date-wise attendance details
- [x] Read-only access

---

## 🙏 Acknowledgments

Thanks to:
- My college professors for guidance
- Supabase for free-tier database
- Expo team for React Native framework
- YouTube tutorials that helped me learn
- My project teammates for support

---

## 📞 Contact

For any questions about this project:
- **Email**: [your-email]
- **College**: Government Polytechnic College
- **Project Guide**: [Professor Name]

---

## �️ Academic Integrity Statement

This project represents my original work developed as part of my academic curriculum at Government Polytechnic College. All code, documentation, and design decisions are the result of my own learning and implementation efforts.

**Project Development Timeline:**
- **Planning Started**: [Date]
- **Database Design**: [Date]
- **Development Phase**: [Start Date] - [End Date]
- **Documentation**: [Date]
- **GitHub Upload**: [Today's Date]

**Verification Details:**
- College ID: [Your College ID]
- Project Code: [If assigned by college]
- Supervisor Signature: [Professor's approval]

Any person found copying this work without proper attribution will be reported for academic dishonesty.

---

## 📄 License & Copyright

**© 2026 [Your Full Name]. All Rights Reserved.**

This project is developed as an academic assignment for Government Polytechnic College and is protected under academic integrity policies. 

**Usage Rights:**
- ✅ Viewing for educational reference (with attribution)
- ✅ Learning from the approach and architecture
- ❌ Direct copying of code without permission
- ❌ Submitting as your own work
- ❌ Commercial use without authorization

**If you want to use this as reference:**
Please contact me and provide proper attribution. I'm happy to help fellow students learn, but plagiarism hurts everyone.

---

<div align="center">

**📱 Built with React Native + Supabase**

**🎓 Academic Project 2026**

**Government Polytechnic College**

**Developed by: [Your Name]**

**Project authenticated on: [Today's Date]**

---

*"Learning by building real solutions"*

</div>
