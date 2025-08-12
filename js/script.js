// Minimal JS to populate placeholders and add interactivity
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Placeholder datasets
const ages = ['5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18+'];

const sampleCourses = [
    // New Launches - Featured courses with "Selling Fast" tag
    { 
        id: 1, 
        title: "The Art of Visual Identity Design", 
        desc: "Master the fundamentals of visual identity design.", 
        img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=200&fit=crop&crop=edges", 
        level: "Beginner",
        students: 1200,
        rating: "4.8",
        category: "app-building",
        tag: "Selling Fast",
        timeOfDay: "morning"
    },
    { 
        id: 2, 
        title: "Introduction to Photography", 
        desc: "Learn the basics of digital photography.", 
        img: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=200&fit=crop&crop=edges", 
        level: "Beginner",
        students: 856,
        rating: "4.9",
        category: "homework",
        timeOfDay: "afternoon"
    },
    { 
        id: 3, 
        title: "Web Development Fundamentals", 
        desc: "Build modern websites from scratch.", 
        img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop&crop=edges", 
        level: "Intermediate",
        students: 2341,
        rating: "4.7",
        category: "coding",
        tag: "Selling Fast",
        timeOfDay: "evening"
    },
    
    // Featured Courses
    { 
        id: 4, 
        title: "Public Speaking Mastery", 
        desc: "Master the art of confident public speaking.", 
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=edges", 
        level: "Advanced",
        students: 978,
        rating: "4.6",
        category: "speaking",
        tag: "Selling Fast",
        timeOfDay: "morning"
    },
    { 
        id: 5, 
        title: "Chess Strategy and Tactics", 
        desc: "Learn advanced chess strategies from masters.", 
        img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=200&fit=crop&crop=edges", 
        level: "Intermediate",
        students: 1567,
        rating: "4.8",
        category: "chess",
        timeOfDay: "evening"
    },
    { 
        id: 6, 
        title: "Python Programming Bootcamp", 
        desc: "Complete Python course from basics to advanced.", 
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=edges", 
        level: "Advanced",
        students: 3245,
        rating: "4.9",
        category: "coding",
        timeOfDay: "evening"
    },
    
    // Additional Courses
    { 
        id: 7, 
        title: "Mobile App Development with Flutter", 
        desc: "Build cross-platform mobile apps.", 
        img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop&crop=edges", 
        level: "Beginner",
        students: 1890,
        rating: "4.7",
        category: "app-building",
        tag: "Selling Fast",
        timeOfDay: "afternoon"
    },
    { 
        id: 8, 
        title: "Math Homework Helper", 
        desc: "Get help with algebra, geometry, and calculus.", 
        img: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=200&fit=crop&crop=edges", 
        level: "Advanced",
        students: 2156,
        rating: "4.8",
        category: "homework",
        timeOfDay: "morning"
    },
    { 
        id: 9, 
        title: "React Native Development", 
        desc: "Build iOS and Android apps with React Native.", 
        img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop&crop=edges", 
        level: "Intermediate",
        students: 1743,
        rating: "4.6",
        category: "coding",
        timeOfDay: "evening"
    },
    { 
        id: 10, 
        title: "Presentation Skills Workshop", 
        desc: "Learn to create compelling presentations.", 
        img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop&crop=edges", 
        level: "Beginner",
        students: 987,
        rating: "4.5",
        category: "speaking",
        timeOfDay: "morning"
    },
    { 
        id: 11, 
        title: "Chess Openings Masterclass", 
        desc: "Master the most important chess openings.", 
        img: "https://images.unsplash.com/photo-1554048612-b6a482b224b8?w=400&h=200&fit=crop&crop=edges", 
        level: "Intermediate",
        students: 1432,
        rating: "4.9",
        category: "chess",
        timeOfDay: "afternoon"
    },
    { 
        id: 12, 
        title: "iOS App Development", 
        desc: "Build native iOS apps with Swift.", 
        img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=200&fit=crop&crop=edges", 
        level: "Advanced",
        students: 876,
        rating: "4.7",
        category: "app-building",
        timeOfDay: "evening"
    },
    { 
        id: 13, 
        title: "Science Homework Support", 
        desc: "Get help with physics, chemistry, and biology.", 
        img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=200&fit=crop&crop=edges", 
        level: "Beginner",
        students: 2543,
        rating: "4.8",
        category: "homework",
        timeOfDay: "afternoon"
    },
    { 
        id: 14, 
        title: "JavaScript Fundamentals", 
        desc: "Learn modern JavaScript programming.", 
        img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop&crop=edges", 
        level: "Intermediate",
        students: 1987,
        rating: "4.6",
        category: "coding",
        timeOfDay: "morning"
    },
    { 
        id: 15, 
        title: "Chess Endgame Techniques", 
        desc: "Master complex endgame positions.", 
        img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop&crop=edges", 
        level: "Advanced",
        students: 1234,
        rating: "4.5",
        category: "chess",
        timeOfDay: "evening"
    }
];

const timeFilters = [
    {
        id: 'morning',
        icon: '🌅',
        label: 'Morning Classes',
        duration: '6:00 AM - 12:00 PM',
        courses: 'morning'
    },
    {
        id: 'afternoon',
        icon: '☀️',
        label: 'Afternoon Classes',
        duration: '12:00 PM - 6:00 PM',
        courses: 'afternoon'
    },
    {
        id: 'evening',
        icon: '�',
        label: 'Evening Classes',
        duration: '6:00 PM - 10:00 PM',
        courses: 'evening'
    },
    {
        id: 'all',
        icon: '🕐',
        label: 'All Times',
        duration: 'Anytime',
        courses: 'all'
    }
];

const teachers = [
    { name: "Abhishek Sharma", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", courses: 8 },
    { name: "Arjun Patel", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", courses: 12 },
    { name: "Ananya Singh", img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face", courses: 6 },
    { name: "Rajesh Kumar", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", courses: 15 },
    { name: "Meera Gupta", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", courses: 9 },
    { name: "Vikram Joshi", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face", courses: 7 }
];

const categories = [
    {
        id: 'coding',
        title: 'Coding',
        icon: '💻',
        stats: '4.9 | 200+ learners',
        background: 'linear-gradient(135deg, #ff6b35, #f7931e)'
    },
    {
        id: 'speaking',
        title: 'Public speaking',
        icon: '🎤',
        stats: '4.8 | 150+ learners',
        background: 'linear-gradient(135deg, #667eea, #764ba2)'
    },
    {
        id: 'chess',
        title: 'Chess',
        icon: '♛',
        stats: '4.9 | 180+ learners',
        background: 'linear-gradient(135deg, #485563, #29323c)'
    },
    {
        id: 'homework',
        title: 'Home work help',
        icon: '📚',
        stats: '4.9 | 220+ learners',
        background: 'linear-gradient(135deg, #7b4397, #dc2430)'
    },
    {
        id: 'app-building',
        title: 'App building',
        icon: '📱',
        stats: '4.8 | 190+ learners',
        background: 'linear-gradient(135deg, #00c6ff, #0072ff)'
    }
];

// helper to create card element
function makeCourseCard(c) {
    const el = document.createElement('article');
    el.className = 'card';
    const tagHtml = c.tag ? `<span class="selling-fast-tag">${c.tag}</span>` : '';
    el.innerHTML = `
    <div class="thumb">
      ${tagHtml}
      <img src="${c.img}" alt="${c.title}" onerror="this.src='https://via.placeholder.com/400x200/e2e8f0/64748b?text=Course+Image'">
    </div>
    <div class="card-body">
      <h3>${c.title}</h3>
      <p>${c.desc}</p>
      <div class="meta">
        <span class="badge">${c.level}</span>
        <span style="color:var(--muted);font-size:0.75rem">⭐ ${c.rating} • ${c.students} students</span>
      </div>
    </div>
  `;
    return el;
}

// populate age buttons
const ageList = document.getElementById('ageList');
if (ageList) {
    ages.forEach(a => {
        const btn = document.createElement('button');
        btn.className = 'age-btn';
        btn.textContent = a;
        btn.addEventListener('click', () => {
            document.querySelectorAll('.age-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
        ageList.appendChild(btn);
    });
}

// populate grids
const newLaunches = document.getElementById('newLaunches');
const featuredCourses = document.getElementById('featuredCourses');
const webinars = document.getElementById('webinars');
const teacherRow = document.getElementById('teacherRow');
const categoryCards = document.getElementById('categoryCards');
const categoryCourses = document.getElementById('categoryCourses');
const timeFiltersContainer = document.getElementById('timeFilters');
const filteredCoursesContainer = document.getElementById('filteredCourses');

if (newLaunches) {
    // Show first 6 courses for new launches
    sampleCourses.slice(0, 6).forEach(c => newLaunches.appendChild(makeCourseCard(c)));
}
if (featuredCourses) {
    // Show courses 6-12 for featured courses
    sampleCourses.slice(6, 12).forEach(c => featuredCourses.appendChild(makeCourseCard(c)));
}
if (webinars) {
    // Show last 3 courses for webinar section
    sampleCourses.slice(12, 15).forEach(c => {
        const w = makeCourseCard(c);
        webinars.appendChild(w);
    });
}
if (teacherRow) {
    teachers.forEach(t => {
        const div = document.createElement('div');
        div.className = 'teacher';
        div.innerHTML = `
            <img src="${t.img}" alt="${t.name}" onerror="this.src='https://via.placeholder.com/64x64/e2e8f0/64748b?text=${t.name.charAt(0)}'">
            <div>
                <strong>${t.name}</strong>
                <div style="font-size:.875rem;color:var(--muted)">${t.courses} courses</div>
            </div>
        `;
        teacherRow.appendChild(div);
    });
}
// Initialize category cards
if (categoryCards && categoryCourses) {
    // Create category cards
    categories.forEach((cat, index) => {
        const card = document.createElement('div');
        card.className = `category-card ${index === 0 ? 'active' : ''}`;
        card.setAttribute('data-category', cat.id);
        card.innerHTML = `
            <div class="category-icon" style="background: ${cat.background}">${cat.icon}</div>
            <div class="category-title">${cat.title}</div>
            <div class="category-stats">⭐ ${cat.stats}</div>
        `;
        
        card.addEventListener('click', () => {
            // Remove active class from all cards
            document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
            // Add active class to clicked card
            card.classList.add('active');
            // Filter and display courses
            filterCoursesByCategory(cat.id);
        });
        
        categoryCards.appendChild(card);
    });
    
    // Initialize with first category (coding)
    filterCoursesByCategory('coding');
}

// Function to filter courses by category
function filterCoursesByCategory(categoryId) {
    if (!categoryCourses) return;
    
    const coursesToShow = sampleCourses.filter(course => course.category === categoryId);
    
    // Clear existing courses
    categoryCourses.innerHTML = '';
    
    // Add filtered courses
    coursesToShow.forEach(course => {
        categoryCourses.appendChild(makeCourseCard(course));
    });
    
    // If no courses found, show a message
    if (coursesToShow.length === 0) {
        categoryCourses.innerHTML = '<p style="text-align:center;color:var(--muted);grid-column:1/-1">No courses found for this category.</p>';
    }
}

// Initialize time filters
if (timeFiltersContainer && filteredCoursesContainer) {
    // Create filter buttons
    timeFilters.forEach((filter, index) => {
        const btn = document.createElement('div');
        btn.className = `time-filter-btn ${index === 0 ? 'active' : ''}`;
        btn.setAttribute('data-filter', filter.id);
        btn.innerHTML = `
            <div class="time-filter-icon">${filter.icon}</div>
            <div class="time-filter-label">${filter.label}</div>
            <div class="time-filter-duration">${filter.duration}</div>
        `;
        
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            document.querySelectorAll('.time-filter-btn').forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Filter and display courses
            filterCoursesByTime(filter.id);
        });
        
        timeFiltersContainer.appendChild(btn);
    });
    
    // Initialize with first filter (morning courses)
    filterCoursesByTime('morning');
}

// Function to filter courses by time of day
function filterCoursesByTime(timeOfDay) {
    if (!filteredCoursesContainer) return;
    
    let coursesToShow;
    if (timeOfDay === 'all') {
        coursesToShow = sampleCourses;
    } else {
        coursesToShow = sampleCourses.filter(course => course.timeOfDay === timeOfDay);
    }
    
    // Clear existing courses
    filteredCoursesContainer.innerHTML = '';
    
    // Add filtered courses
    coursesToShow.forEach(course => {
        filteredCoursesContainer.appendChild(makeCourseCard(course));
    });
    
    // If no courses found, show a message
    if (coursesToShow.length === 0) {
        filteredCoursesContainer.innerHTML = '<p style="text-align:center;color:var(--muted);grid-column:1/-1">No courses found for this time slot.</p>';
    }
}

// search functionality
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const levelSelect = document.getElementById('filterLevel');

function filterAndRender() {
    const q = searchInput.value.trim().toLowerCase();
    const level = levelSelect ? levelSelect.value : 'all';
    const filtered = sampleCourses.filter(c => {
        const matchQ = c.title.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q);
        const matchLevel = (level === 'all') ? true : c.level.toLowerCase() === level;
        return matchQ && matchLevel;
    });
    // render into newLaunches as primary preview:
    if (newLaunches) {
        newLaunches.innerHTML = '';
        (filtered.length ? filtered : sampleCourses.slice(0, 3)).forEach(c => newLaunches.appendChild(makeCourseCard(c)));
    }
}

if (searchBtn) searchBtn.addEventListener('click', filterAndRender);
if (searchInput) searchInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') filterAndRender(); });
if (levelSelect) levelSelect.addEventListener('change', filterAndRender);
