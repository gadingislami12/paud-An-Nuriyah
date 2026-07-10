document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    /* ==========================================================================
       Mobile Menu Toggle
       ========================================================================== */
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Switch icon between Menu and X
            const isOpen = navMenu.classList.contains('active');
            mobileMenuToggle.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
            
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });

        // Close menu when clicking nav links
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) {
                    icon.setAttribute('data-lucide', 'menu');
                    lucide.createIcons({
                        attrs: { 'data-lucide': 'menu' },
                        nameAttr: 'data-lucide'
                    });
                }
            });
        });
    }

    /* ==========================================================================
       Header Sticky Shadow on Scroll
       ========================================================================== */
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* ==========================================================================
       Profil Section Tab Switcher
       ========================================================================== */
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Set inactive state on all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });

            // Set inactive state on all panels
            tabPanels.forEach(panel => {
                panel.classList.remove('active');
            });

            // Activate clicked tab and panel
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    /* ==========================================================================
       Galeri Photo Filter System
       ========================================================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filterValue = btn.getAttribute('data-filter');

            // Activate filter button
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter items
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filterValue === 'semua' || category === filterValue) {
                    item.style.display = 'block';
                    // Trigger fade in animation
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    /* ==========================================================================
       Gallery Detailed Modal Popup
       ========================================================================== */
    const galleryModal = document.getElementById('galleryModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalBodyPlaceholder = document.getElementById('modalBodyPlaceholder');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgWrapper = item.querySelector('.gallery-img-wrapper');
            const titleText = item.querySelector('.gallery-info h4').textContent;
            const descText = item.querySelector('.gallery-info p').textContent;

            // Clear previous modal contents
            modalBodyPlaceholder.innerHTML = '';

            // Clone graphic placeholder SVG and append to modal
            const clonedContent = imgWrapper.cloneNode(true);
            clonedContent.style.paddingTop = '0';
            clonedContent.style.height = '100%';
            clonedContent.classList.add('cloned-modal-image');
            modalBodyPlaceholder.appendChild(clonedContent);

            // Populate text
            modalTitle.textContent = titleText;
            modalDesc.textContent = descText;

            // Show Modal
            galleryModal.classList.add('show');
            galleryModal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden'; // Lock scrolling
        });
    });

    // Close Modal event handlers
    const closeModal = () => {
        galleryModal.classList.remove('show');
        galleryModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Unlock scroll
    };

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    const modalOverlay = galleryModal?.querySelector('.modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Close Modal on Esc key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && galleryModal?.classList.contains('show')) {
            closeModal();
        }
    });

    /* ==========================================================================
       WhatsApp Form Registration & Enquiry Sender
       ========================================================================== */
    const registrationForm = document.getElementById('registrationForm');

    if (registrationForm) {
        registrationForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // Fetch input values
            const namaAnak = document.getElementById('namaAnak').value.trim();
            const tanggalLahir = document.getElementById('tanggalLahir').value;
            const namaWali = document.getElementById('namaWali').value.trim();
            const whatsappNo = document.getElementById('whatsappNo').value.trim();
            const programPilihan = document.getElementById('programPilihan').value;
            const catatanTambahan = document.getElementById('catatanTambahan').value.trim();

            // Format date of birth in Indonesian style
            let formattedDob = tanggalLahir;
            if (tanggalLahir) {
                const parts = tanggalLahir.split('-');
                if (parts.length === 3) {
                    formattedDob = `${parts[2]}/${parts[1]}/${parts[0]}`;
                }
            }

            // Target school WhatsApp phone number (official school admin contact)
            const schoolAdminPhone = '6285718528089'; 

            // Create structured, premium message layout for the owner
            let message = `*HALO ADMIN KB AN NURIYAH*\n`;
            message += `*Saya ingin mengajukan pendaftaran/pertanyaan baru!*\n\n`;
            message += `-----------------------------------------------\n`;
            message += `📝 *DATA CALON MURID:*\n`;
            message += `• *Nama Anak:* ${namaAnak}\n`;
            message += `• *Tanggal Lahir:* ${formattedDob}\n\n`;
            message += `👤 *DATA ORANG TUA / WALI:*\n`;
            message += `• *Nama Wali:* ${namaWali}\n`;
            message += `• *Nomor Kontak:* ${whatsappNo}\n\n`;
            message += `🏫 *PROGRAM PEMBELAJARAN PILIHAN:*\n`;
            message += `• *Program:* ${programPilihan}\n`;
            message += `-----------------------------------------------\n\n`;

            if (catatanTambahan) {
                message += `💬 *CATATAN / PERTANYAAN TAMBAHAN:*\n`;
                message += `"${catatanTambahan}"\n\n`;
            }

            message += `Mohon info dan langkah pendaftaran selanjutnya. Terima kasih! 🙏✨`;

            // Encode message text
            const encodedText = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${schoolAdminPhone}?text=${encodedText}`;

            // Redirect user to WhatsApp chat link in a new window tab
            window.open(whatsappUrl, '_blank');
        });
    }

    /* ==========================================================================
       Scroll Spy / Active Nav Indicator
       ========================================================================== */
    const sections = document.querySelectorAll('section.scroll-spy');
    const navItems = document.querySelectorAll('.nav-menu ul li a.nav-link');

    const scrollSpyActive = () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // offset navbar height
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < (sectionTop + sectionHeight)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        // Special check for top home area
        if (window.scrollY < 200) {
            currentSectionId = '';
        }

        navItems.forEach(item => {
            item.classList.remove('active');
            const href = item.getAttribute('href');
            
            if (href === '#' && currentSectionId === '') {
                item.classList.add('active');
            } else if (href === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', scrollSpyActive);

    /* ==========================================================================
       Reveal on Scroll Animations (Intersection Observer)
       ========================================================================== */
    const revealElements = () => {
        // Tag sections or cards to reveal
        const targetElements = document.querySelectorAll('.stat-card, .tab-btn, .h-card, .program-card, .gallery-item, .berita-card, .kontak-info-card, .pendaftaran-card, .tab-panel');
        
        targetElements.forEach(el => {
            el.classList.add('reveal');
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Trigger only once
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        targetElements.forEach(el => observer.observe(el));
    };

    revealElements();
});
