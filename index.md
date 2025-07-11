---
layout: default
---

<!-- ABOUT Tab Content -->
<div class="tab-content active" id="about-tab">
    <div class="character-screen">
        <div class="personal-log">
            <div class="profile-section">
                <div class="profile-image">
                    <img src="{{ site.data.about.profile_image | relative_url }}" alt="Profile Image" class="profile-img" width="100" height="100">
                </div>
                <div class="profile-text">
                    <p>{{ site.data.about.personal_log }}</p>
                </div>
            </div>
        </div>
        
        <div class="character-card">
            <div class="card-header">CHARACTER STATUS</div>
            <div class="stats-grid">
                <div class="stat-row">
                    <span class="stat-label">NAME:</span>
                    <span class="stat-value">{{ site.data.about.name }}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">CLASS:</span>
                    <span class="stat-value">{{ site.data.about.class }}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">GUILD:</span>
                    <span class="stat-value">{{ site.data.about.guild }}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">SPEC:</span>
                    <span class="stat-value">{{ site.data.about.specialization }}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">LOCATION:</span>
                    <span class="stat-value">{{ site.data.about.location }}</span>
                </div>
                <div class="stat-row">
                    <span class="stat-label">ALIGNMENT:</span>
                    <span class="stat-value">{{ site.data.about.alignment }}</span>
                </div>
            </div>
        </div>
        
    </div>
</div>

<!-- SKILLS Tab Content -->
<div class="tab-content" id="skills-tab">
    <div class="system-dashboard">
        <div class="dashboard-header">SYSTEM STATUS</div>
        <div class="skills-grid">
            {% for skill in site.data.skills %}
            <div class="skill-item">
                <div class="skill-header">
                    <span class="skill-name">{{ skill.name }}</span>
                    <span class="skill-status status-{{ skill.status | downcase }}">{{ skill.status }}</span>
                </div>
                <div class="skill-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" data-width="{{ skill.progress }}"></div>
                    </div>
                    <span class="progress-text">{{ skill.progress }}%</span>
                </div>
                <div class="skill-category">{{ skill.category }}</div>
            </div>
            {% endfor %}
        </div>
    </div>
</div>

<!-- PROJECTS Tab Content -->
<div class="tab-content" id="projects-tab">
    <div class="projects-grid">
        <div class="projects-header">PROJECT LIBRARY</div>
        {% for project in site.data.projects %}
        <div class="project-library-item" onclick="openProjectModal('{{ project.title }}', '{{ project.description }}', '{{ project.tech_stack }}', '{{ project.status }}', '{{ project.github }}', '{{ project.demo }}')">
            <div class="library-item-label">{{ project.title }}</div>
            <div class="library-item-tech">{{ project.tech_stack }}</div>
            <div class="library-item-status status-{{ project.status | downcase }}">{{ project.status }}</div>
        </div>
        {% endfor %}
    </div>
</div>

<!-- CONTACT Tab Content -->
<div class="tab-content" id="contact-tab">
    <div class="contact-panel">
        <div class="panel-header">COMMUNICATION LINKS</div>
        <div class="contact-grid">
            {% for contact in site.data.contact %}
            <div class="contact-card" onclick="handleContactClick('{{ contact.type }}', '{{ contact.value }}')">
                <div class="contact-icon">{{ contact.icon }}</div>
                <div class="contact-info">
                    <div class="contact-name">{{ contact.name }}</div>
                    <div class="contact-desc">{{ contact.description }}</div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</div>