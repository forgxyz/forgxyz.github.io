
// Track if skills animation has been played
let skillsAnimated = false;

// System time update
function updateSystemTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

// Tab switching functionality
function switchTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab content
    const selectedContent = document.getElementById(tabName + '-tab');
    if (selectedContent) {
        selectedContent.classList.add('active');
    }
    
    // Add active class to clicked tab
    const selectedTab = document.querySelector(`[data-tab="${tabName}"]`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
}

// Modal functionality
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Project modal functionality
function openProjectModal(title, description, techStack, status, github, demo) {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    
    // Populate modal content
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-tech').textContent = techStack;
    document.getElementById('modal-status').textContent = status;
    
    // Handle links
    const linksContainer = document.getElementById('modal-links');
    linksContainer.innerHTML = '';
    
    if (github && github !== 'undefined') {
        const githubLink = document.createElement('a');
        githubLink.href = github;
        githubLink.target = '_blank';
        githubLink.rel = 'noopener noreferrer';
        githubLink.textContent = 'GitHub';
        linksContainer.appendChild(githubLink);
    }
    
    if (demo && demo !== 'undefined') {
        const demoLink = document.createElement('a');
        demoLink.href = demo;
        demoLink.target = '_blank';
        demoLink.rel = 'noopener noreferrer';
        demoLink.textContent = 'Demo';
        linksContainer.appendChild(demoLink);
    }
    
    openModal('project-modal');
}


// Contact handling
function handleContactClick(type, value) {
    if (type === 'email') {
        window.location.href = `mailto:${value}`;
    } else if (type === 'url') {
        window.open(value, '_blank', 'noopener,noreferrer');
    }
}

// Window control animations (just for fun)
function handleWindowControls() {
    const minimizeBtn = document.querySelector('.control-btn.minimize');
    const maximizeBtn = document.querySelector('.control-btn.maximize');
    const closeBtn = document.querySelector('.control-btn.close');
    
    if (minimizeBtn) {
        minimizeBtn.addEventListener('click', () => {
            // Animate minimize
            document.body.style.transition = 'transform 0.3s ease';
            document.body.style.transform = 'scale(0.8)';
            setTimeout(() => {
                document.body.style.transform = 'scale(1)';
            }, 300);
        });
    }
    
    if (maximizeBtn) {
        maximizeBtn.addEventListener('click', () => {
            // Toggle fullscreen-like effect
            const container = document.querySelector('.game-container');
            if (container) {
                container.style.transition = 'all 0.3s ease';
                if (container.style.maxWidth === '100vw') {
                    container.style.maxWidth = '1200px';
                    container.style.height = 'auto';
                } else {
                    container.style.maxWidth = '100vw';
                    container.style.height = '100vh';
                }
            }
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            // Animate close
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.opacity = '1';
                alert('Thanks for visiting! 🎮');
            }, 500);
        });
    }
}

// Skill progress bar animations
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach((bar, index) => {
        const targetWidth = bar.getAttribute('data-width') + '%';
        bar.style.width = '0%';
        bar.style.transition = 'width 0.8s ease-in-out';
        
        // Stagger the animations slightly for a nice effect
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, index * 100 + 200);
    });
}

// Easter egg: Konami code
function setupKonamiCode() {
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    let userInput = [];
    
    document.addEventListener('keydown', (e) => {
        userInput.push(e.code);
        
        if (userInput.length > konamiCode.length) {
            userInput.shift();
        }
        
        if (userInput.join('') === konamiCode.join('')) {
            // Konami code activated!
            document.body.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 3000);
            
            // Show special message
            const message = document.createElement('div');
            message.textContent = '🎮 KONAMI CODE ACTIVATED! 🎮';
            message.style.position = 'fixed';
            message.style.top = '50%';
            message.style.left = '50%';
            message.style.transform = 'translate(-50%, -50%)';
            message.style.background = 'var(--accent-primary)';
            message.style.color = 'var(--bg-base)';
            message.style.padding = '20px';
            message.style.borderRadius = '10px';
            message.style.zIndex = '9999';
            message.style.fontSize = '24px';
            message.style.fontWeight = 'bold';
            document.body.appendChild(message);
            
            setTimeout(() => {
                message.remove();
            }, 3000);
            
            userInput = [];
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Start system time updates
    updateSystemTime();
    setInterval(updateSystemTime, 1000);
    
    // Set up tab switching
    const tabs = document.querySelectorAll('.nav-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            switchTab(tabName);
            
            // Animate progress bars when switching to skills tab (only once)
            if (tabName === 'skills' && !skillsAnimated) {
                setTimeout(animateProgressBars, 100);
                skillsAnimated = true;
            }
        });
    });
    
    // Set up modal closing when clicking outside
    window.addEventListener('click', (e) => {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });
    
    // Set up ESC key to close modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const openModals = document.querySelectorAll('.modal[style*="display: block"]');
            openModals.forEach(modal => {
                closeModal(modal.id);
            });
        }
    });
    
    // Set up window controls
    handleWindowControls();
    
    // Set up Konami code
    setupKonamiCode();
    
    // Animate progress bars on initial load if skills tab is active
    if (document.getElementById('skills-tab').classList.contains('active')) {
        setTimeout(animateProgressBars, 500);
        skillsAnimated = true;
    }
});

// Add some fun hover effects
document.addEventListener('DOMContentLoaded', () => {
    // Add hover sound effect simulation
    const interactiveElements = document.querySelectorAll('.nav-tab, .project-library-item, .contact-card');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            // Visual feedback for hover
            element.style.transition = 'all 0.2s ease';
        });
    });
    
    // Add click feedback
    const clickableElements = document.querySelectorAll('button, .project-library-item, .contact-card');
    clickableElements.forEach(element => {
        element.addEventListener('click', (e) => {
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(139, 92, 246, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = (e.clientX - element.offsetLeft) + 'px';
            ripple.style.top = (e.clientY - element.offsetTop) + 'px';
            ripple.style.pointerEvents = 'none';
            
            element.style.position = 'relative';
            element.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS animation for ripple effect
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);