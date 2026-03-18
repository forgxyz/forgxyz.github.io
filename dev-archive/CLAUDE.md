# Jack's Personal Website - Project Documentation

A retro-styled personal website for Jack, a Senior Analytics Engineer at Flipside Crypto. The design blends 8-bit Game Boy RPG aesthetics with modern web standards, featuring pixel fonts, animated UI, and modular Jekyll-based content management.

## 🎯 Project Overview

**Status**: ✅ Complete and deployed  
**Framework**: Jekyll (GitHub Pages compatible)  
**Design**: Game Boy-inspired UI with purple Solarized Dark theme  
**Responsive**: Mobile-first design with optimized layouts  

## 🏗 Architecture

### File Structure
```
├── _config.yml                    # Jekyll configuration
├── _layouts/default.html          # Main layout template
├── _includes/
│   ├── header-bar.html           # System header with live clock
│   ├── nav.html                  # Tab navigation
│   └── modals.html               # Project detail modals
├── _data/                        # Content data (YAML)
│   ├── about.yml                 # Personal info & character stats
│   ├── skills.yml                # Technical skills with progress bars
│   ├── projects.yml              # Project portfolio data
│   └── contact.yml               # Contact links & social media
├── assets/
│   ├── css/styles.css            # Game Boy pixel art styling
│   ├── js/script.js              # Interactive functionality
│   └── img/                      # Images and assets
├── index.md                      # Main page content
├── Gemfile                       # Ruby dependencies
└── favicon.ico                   # Site favicon
```

### Content Management
All site content is managed through YAML data files in `_data/` for easy editing:

- **Personal Info**: Edit `_data/about.yml` for bio, character stats, profile image
- **Skills**: Modify `_data/skills.yml` to add/update technical skills and progress
- **Projects**: Update `_data/projects.yml` for portfolio items with GitHub links
- **Contact**: Edit `_data/contact.yml` for social links and contact methods

## 🎨 Design System

### Visual Identity
- **Theme**: Solarized Dark base with purple accents (#8b5cf6, #a78bfa, #c084fc)
- **Typography**: JetBrains Mono pixel font throughout
- **Style**: Flat UI with clean borders, subtle hover effects
- **Inspiration**: Pokémon-era Game Boy stat screens and cartridge menus

### Layout Components
1. **Header Bar**: System title "JACK.SYS v2.0.0" with live clock and window controls
2. **Navigation**: Tab-based navigation (ABOUT | SKILLS | PROJECTS | CONTACT)
3. **About**: Character card layout with personal log and RPG-style stats
4. **Skills**: System status dashboard with animated progress bars
5. **Projects**: Clickable project cartridges opening detailed modals
6. **Contact**: Terminal-inspired communication panel with social links

### Responsive Behavior
- **Desktop (>768px)**: Two-column layouts, side-by-side content
- **Mobile (≤768px)**: Single-column, stacked layouts with centered profile image
- **Small Mobile (≤480px)**: Optimized header and spacing for small screens

## 🛠 Development Workflow

### Local Development
```bash
# Install dependencies
bundle install

# Serve locally with auto-reload
bundle exec jekyll serve

# Build for production
bundle exec jekyll build
```

### Adding Content

**New Skill:**
```yaml
# Add to _data/skills.yml
- name: "New Technology"
  status: "LEARNING"          # MASTERED, ACTIVE, ONLINE, LEARNING
  progress: 65               # 0-100
  category: "Programming"    # Programming, Database, etc.
```

**New Project:**
```yaml
# Add to _data/projects.yml
- title: "Project Name"
  tech_stack: "Tech, Stack, List"
  status: "ACTIVE"           # DEPLOYED, ACTIVE, COMPLETED, BETA, DEVELOPMENT
  description: "Project description for modal"
  github: "https://github.com/user/repo"  # Optional
  demo: "https://demo-url.com"             # Optional
```

**Update Personal Info:**
```yaml
# Edit _data/about.yml
name: "Jack"
class: "Senior Analytics Engineer"
level: 28                    # Update experience level
experience: 8500            # Update XP points
next_evolution: "Staff Engineer"  # Next career goal
personal_log: |             # Update bio text
  Your updated bio here...
```

### Styling Guidelines

**CSS Variables**: Use existing CSS custom properties for consistent theming
```css
--accent-primary: #8b5cf6   /* Main purple */
--accent-secondary: #a78bfa  /* Light purple */
--bg-base: #002b36          /* Dark background */
--text-primary: #839496     /* Main text */
```

**Animation Standards**: 
- Progress bars: 0.8s ease-in-out with staggered delays
- Hover effects: 0.2s transitions
- Modal appearances: 0.3s fade-in

## 🚀 Deployment

**GitHub Pages**: Automatically builds and deploys on push to main branch
- Site URL: `https://forgxyz.github.io`
- Build time: ~30-60 seconds
- No server configuration needed

## 🧪 Testing Checklist

Before deploying changes:
- [ ] `bundle exec jekyll build` completes without errors
- [ ] All tabs navigate correctly
- [ ] Progress bar animations work smoothly on Skills tab
- [ ] Project modals open with correct data
- [ ] Contact links function properly
- [ ] Mobile layout displays correctly
- [ ] Live clock updates in header

## 🔧 Technical Notes

### JavaScript Features
- **Tab Navigation**: Single-page app with smooth transitions
- **Live Clock**: Real-time system date in header (24-hour format)
- **Progress Animations**: Triggered once per session when accessing Skills
- **Modal System**: Dynamic project details with GitHub/demo links
- **Easter Eggs**: Konami code activation, window control animations

### Performance Optimizations
- **CSS**: Compressed Sass output, efficient selectors
- **Images**: Optimized assets, proper sizing
- **JavaScript**: Efficient DOM queries, debounced animations
- **Jekyll**: Static generation, minimal runtime overhead

### Accessibility Features
- **Semantic HTML**: Proper heading hierarchy, ARIA labels
- **Keyboard Navigation**: Tab navigation, ESC to close modals
- **Color Contrast**: WCAG compliant text/background ratios
- **Mobile-First**: Touch-friendly interface, readable text sizes

## 🎮 Interactive Features

**Window Controls**: Decorative minimize/maximize/close buttons with animations  
**Konami Code**: Hidden easter egg (↑↑↓↓←→←→BA) for color theme change  
**Ripple Effects**: Click feedback on interactive elements  
**Staggered Animations**: Skills progress bars animate in sequence  

---

*This documentation reflects the current state of the project. Update as features are added or modified.*