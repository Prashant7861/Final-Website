
        const portfolioData = [
            {
                id: 1,
                title: 'EDM Music',
                description: 'Electronic, high-energy music made for dancing and clubs.Includes subgenres like house, techno, and dubstep.',
                image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84ad7b8ee792e37e535dae0ce2',
                
            },
            {
                id: 2,
                title: 'Pop Music',
                description: 'Catchy, mainstream music designed to appeal to a wide audience.Features simple melodies, strong hooks, and upbeat production.',
                image: 'https://static01.nyt.com/images/2018/12/30/arts/30yearend-pop2/merlin_147857643_8e0c5c65-4549-4946-b51d-49425b9dcf24-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
                
            },
            {
                id: 3,
                title: 'Hip-Hop / Rap',
                description: 'Focuses on rhythmic speech (rap), strong beats, and storytelling.Often expresses culture, identity, and social issues.',
                image: 'https://cdn-images.dzcdn.net/images/cover/399a6d91be08838e9b198f556631b8b2/1900x1900-000000-80-0-0.jpg',
                
            },
            {
                id: 4,
                title: 'Classical',
                description: 'Orchestral or instrumental music rooted in centuries-old traditions.Known for complex compositions and emotional depth.',
                image: 'https://www.kennedy-center.org/globalassets/education/resources-for-educators/classroom-resources/artsedge/media/american-classics/classical-music-in-america2-169.jpg',
              
            },
            {
                id: 5,
                title: 'R&B (Rhythm & Blues)',
                description: 'Smooth vocals with soulful melodies and groovy beats.Often focuses on love, emotions, and relationships.',
                image: 'https://d1vvuf3f66vs33.cloudfront.net/2023/09/istockphoto-1452877563-170667a.webp',
              
            },
            {
                id: 6,
                title: 'Metal',
                description: 'Heavy guitar riffs, fast drums, and powerful vocals.Ranges from melodic to aggressive and intense styles.',
                image: 'https://cdn.getmidnight.com/b5a0b552ae89a91aa34705031852bd16/size/w600/2022/11/Instagram-post---1--1-.png',
                
            },
            {
                id: 7,
                title: 'K-Pop',
                description: 'Korean pop music blending pop, hip-hop, EDM, and R&B.Known for strong visuals, choreography, and polished production.',
                image: 'https://ichef.bbci.co.uk/ace/standard/1376/cpsprodpb/b92b/live/3ecafa80-042b-11f0-b4f8-61a094898779.jpg',
              
            }
        ];

        // Skills data
        // Skills data (updated with YouTube videoId for each item)
        const skillsData = [
            { name: 'Rose & Bruno Mars',bgImage: 'https://www.billboard.com/wp-content/uploads/2024/10/02-ROSE-and-Bruno-Mars-John-V.-Esparza-press-2024-billboard-1548.jpg',  category: 'popmusic', videoId: 'dSRfZqHCGjQ' },
            { name: 'Lola Young',bgImage: 'https://www.teethmag.net/wp-content/uploads/2020/05/Lola-Young-None-For-You-cr.Joe-Perri.jpg',  category: 'edm', videoId: 'bM7km2qXZLE' },
            { name: 'Prajina',bgImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUUKBiNCm6-htNJ1Vq5BVMmrUwTrwSrgAQw&s',  category: 'rnb', videoId: 'RhLeTpfw2GI' },
            { name: 'AR rahaman',bgImage: 'https://framerusercontent.com/images/D0sV6YYEINQAaW5k5bT1MowEI.jpg',  category: 'classical', videoId: 'bM7km2qXZLE' },
            { name: 'BlackPink',bgImage: 'https://assets.vogue.com/photos/62ec0f8872de9093ac1bd94a/1:1/w_2000,h_2000,c_limit/1143890227',  category: 'kpop', videoId: 'Qcrti0aJqiE' },
            { name: 'Eminem',bgImage: 'https://i.ytimg.com/vi/U1th94xR694/maxresdefault.jpg',  category: 'hiphop', videoId: '_Yhyp-_hX2s' },
            { name: 'Slip-Knot',bgImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx9SwTI_7fPPbxE4Th8_30HAgsD3DMuxEXVE1TEwQuAMonJliGy6qSi9uZNnhXAPO9lT0d-WLttLgP83f6VeIQo6dRB9RrCTcAC4vNgc4&s=10',  category: 'metal', videoId: '6fVE8kSM43I' },
           
        ];

        function playSkillVideo(videoId) {
    const player = document.getElementById("skillVideoPlayer");
    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}


function openVideoModal(videoId) {
    const modal = document.getElementById("videoModal");
    const player = document.getElementById("popupPlayer");

    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    modal.style.display = "flex";
}

function closeVideoModal() {
    const modal = document.getElementById("videoModal");
    const player = document.getElementById("popupPlayer");

    modal.style.display = "none";
    player.src = ""; // stop video
}

        

        // Scroll to section function
        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            const header = document.getElementById('header');
            if (section) {
                const headerHeight = header.offsetHeight;
                const targetPosition = section.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }

        // Initialize particles for philosophy section
        function initParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 15;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random horizontal position
                particle.style.left = Math.random() * 100 + '%';
                
                // Start particles at random vertical positions throughout the section
                particle.style.top = Math.random() * 100 + '%';
                
                // Random animation delay for natural movement
                particle.style.animationDelay = Math.random() * 20 + 's';
                
                // Random animation duration for variety
                particle.style.animationDuration = (18 + Math.random() * 8) + 's';
                
                particlesContainer.appendChild(particle);
            }
        }

        // Initialize carousel
        let currentIndex = 0;
        const carousel = document.getElementById('carousel');
        const indicatorsContainer = document.getElementById('indicators');

        function createCarouselItem(data, index) {
            const item = document.createElement('div');
            item.className = 'carousel-item';
            item.dataset.index = index;
            
       const techBadges = (data.tech || [])
             .map(tech => `<span class="tech-badge">${tech}</span>`)
            .join('');

            
            item.innerHTML = `
                <div class="card">
                    <div class="card-number">0${data.id}</div>
                    <div class="card-image">
                        <img src="${data.image}" alt="${data.title}">
                    </div>
                    <h3 class="card-title">${data.title}</h3>
                    <p class="card-description">${data.description}</p>
                    <div class="card-tech">${techBadges}</div>
                    <button class="card-cta" onclick="scrollToSection('about')">Explore</button>
                </div>
            `;
            
            return item;
        }

        function initCarousel() {
            // Create carousel items
            portfolioData.forEach((data, index) => {
                const item = createCarouselItem(data, index);
                carousel.appendChild(item);
                
                // Create indicator
                const indicator = document.createElement('div');
                indicator.className = 'indicator';
                if (index === 0) indicator.classList.add('active');
                indicator.dataset.index = index;
                indicator.addEventListener('click', () => goToSlide(index));
                indicatorsContainer.appendChild(indicator);
            });
            
            updateCarousel();
        }

        function updateCarousel() {
            const items = document.querySelectorAll('.carousel-item');
            const indicators = document.querySelectorAll('.indicator');
            const totalItems = items.length;
            const isMobile = window.innerWidth <= 768;
            const isTablet = window.innerWidth <= 1024;
            
            items.forEach((item, index) => {
                // Calculate relative position
                let offset = index - currentIndex;
                
                // Wrap around for continuous rotation
                if (offset > totalItems / 2) {
                    offset -= totalItems;
                } else if (offset < -totalItems / 2) {
                    offset += totalItems;
                }
                
                const absOffset = Math.abs(offset);
                const sign = offset < 0 ? -1 : 1;
                
                // Reset transform
                item.style.transform = '';
                item.style.opacity = '';
                item.style.zIndex = '';
                item.style.transition = 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)';
                
                // Adjust spacing based on screen size
                let spacing1 = 400;
                let spacing2 = 600;
                let spacing3 = 750;
                
                if (isMobile) {
                    spacing1 = 280;  // Was 400, now 100px closer
                    spacing2 = 420;  // Was 600, now 180px closer
                    spacing3 = 550;  // Was 750, now 200px closer
                } else if (isTablet) {
                    spacing1 = 340;
                    spacing2 = 520;
                    spacing3 = 650;
                }
                
                if (absOffset === 0) {
                    // Center item
                    item.style.transform = 'translate(-50%, -50%) translateZ(0) scale(1)';
                    item.style.opacity = '1';
                    item.style.zIndex = '10';
                } else if (absOffset === 1) {
                    // Side items
                    const translateX = sign * spacing1;
                    const rotation = isMobile ? 25 : 30;
                    const scale = isMobile ? 0.88 : 0.85;
                    item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-200px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                    item.style.opacity = '0.8';
                    item.style.zIndex = '5';
                } else if (absOffset === 2) {
                    // Further side items
                    const translateX = sign * spacing2;
                    const rotation = isMobile ? 35 : 40;
                    const scale = isMobile ? 0.75 : 0.7;
                    item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-350px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                    item.style.opacity = '0.5';
                    item.style.zIndex = '3';
                } else if (absOffset === 3) {
                    // Even further items
                    const translateX = sign * spacing3;
                    const rotation = isMobile ? 40 : 45;
                    const scale = isMobile ? 0.65 : 0.6;
                    item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-450px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                    item.style.opacity = '0.3';
                    item.style.zIndex = '2';
                } else {
                    // Hidden items (behind)
                    item.style.transform = 'translate(-50%, -50%) translateZ(-500px) scale(0.5)';
                    item.style.opacity = '0';
                    item.style.zIndex = '1';
                }
            });
            
            // Update indicators
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % portfolioData.length;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length;
            updateCarousel();
        }

        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }

        // Initialize hexagonal skills grid
        function initSkillsGrid() {
            const skillsGrid = document.getElementById('skillsGrid');
            const categoryTabs = document.querySelectorAll('.category-tab');
            
            function displaySkills(category = 'all') {
                skillsGrid.innerHTML = '';
                
                const filteredSkills = category === 'all' 
                    ? skillsData 
                    : skillsData.filter(skill => skill.category === category);
                
                filteredSkills.forEach((skill, index) => {
                    const hexagon = document.createElement('div');
                    hexagon.className = 'skill-hexagon';
                    hexagon.style.animationDelay = `${index * 0.1}s`;
                    
                    hexagon.innerHTML = `
                        <div class="hexagon-inner" style="background-image: url('${skill.bgImage || ''}'); background-size: cover; background-position: center;">
                        <div class="hexagon-content">
                        <div class="skill-icon-hex">${skill.icon || ''}</div>
                        <div class="skill-name-hex">${skill.name}</div>
                        <div class="skill-level">
                           
    </div>
`;

                    
                    hexagon.onclick = () => openVideoModal(skill.videoId);
                    skillsGrid.appendChild(hexagon);

                });
            }
            
            categoryTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    categoryTabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    displaySkills(tab.dataset.category);
                });
            });
            
            displaySkills();
        }

        // Event listeners
        document.getElementById('nextBtn').addEventListener('click', nextSlide);
        document.getElementById('prevBtn').addEventListener('click', prevSlide);

        // Auto-rotate carousel
        setInterval(nextSlide, 5000);

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        });

        // Update carousel on window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                updateCarousel();
            }, 250);
        });

        // Initialize on load
        initCarousel();
        initSkillsGrid();
        initParticles();

        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Smooth scrolling and active navigation
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            });
        });

        // Update active navigation on scroll
        function updateActiveNav() {
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        const href = link.getAttribute('href').substring(1);
                        if (href === sectionId) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }

        window.addEventListener('scroll', updateActiveNav);

        // Animated counter for stats
        function animateCounter(element) {
            const target = parseInt(element.dataset.target);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const counter = setInterval(() => {
                current += step;
                if (current >= target) {
                    element.textContent = target;
                    clearInterval(counter);
                } else {
                    element.textContent = Math.floor(current);
                }
            }, 16);
        }

        // Intersection Observer for stats animation
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(number => {
                        if (!number.classList.contains('animated')) {
                            number.classList.add('animated');
                            animateCounter(number);
                        }
                    });
                }
            });
        }, observerOptions);

        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            observer.observe(statsSection);
        }

        // Form submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show success message
            alert(`Thank you ${data.name}! Your message has been transmitted successfully. We'll respond within 24 hours.`);
            
            // Reset form
            contactForm.reset();
        });

        // Loading screen
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.classList.add('hidden');
            }, 1500);
        });

        // Add parallax effect to hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero');
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });