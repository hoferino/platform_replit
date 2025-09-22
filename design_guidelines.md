# M&A Workflow Application - Client View Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from professional productivity tools like Linear and Notion, combined with enterprise dashboard patterns from platforms like Salesforce and HubSpot. This approach suits the utility-focused, information-dense nature of M&A workflows while maintaining visual sophistication expected in high-stakes financial environments.

## Core Design Principles
- **Professional Authority**: Clean, sophisticated interface that instills confidence
- **Information Clarity**: Clear hierarchy for complex financial data and timelines
- **German Localization**: Optimized for German language with appropriate spacing
- **Secure & Trustworthy**: Visual cues that emphasize security and reliability

## Color Palette

### Primary Colors
- **Brand Navy**: 220 85% 25% (primary brand color)
- **Professional Blue**: 210 75% 45% (interactive elements)
- **Success Green**: 140 65% 45% (positive metrics, completed items)
- **Warning Orange**: 35 85% 55% (attention items, pending actions)
- **Error Red**: 0 75% 50% (critical issues, overdue items)

### Neutral Scale
- **Charcoal**: 220 15% 15% (dark mode primary text)
- **Slate**: 220 10% 40% (secondary text)
- **Light Gray**: 220 5% 85% (borders, subtle backgrounds)
- **White**: 0 0% 100% (backgrounds, cards)

## Typography
- **Primary**: Inter (professional, excellent readability for data)
- **Secondary**: JetBrains Mono (for numerical data, IDs, timestamps)
- **Hierarchy**: Use consistent scale of text-sm, text-base, text-lg, text-xl, text-2xl

## Layout System
**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, and 12 consistently
- **Micro spacing**: p-2, m-2 (within components)
- **Component spacing**: p-4, m-4 (component padding)
- **Section spacing**: p-6, m-6 (between related sections)
- **Layout spacing**: p-8, m-8 (major layout divisions)
- **Hero spacing**: p-12, m-12 (page-level spacing)

## Component Library

### Navigation
- **Top Navigation**: Clean header with company logo, user profile, and main navigation
- **Sidebar**: Collapsible left sidebar with icon + label navigation for main sections

### Dashboard Cards
- **Deal Status Card**: Large hero card with current phase, progress ring, and key metrics
- **KPI Cards**: Grid of metric cards with trend indicators and color-coded status
- **Document Cards**: File preview cards with upload status and security indicators

### Data Visualization
- **Progress Timeline**: Horizontal timeline with milestone markers and phase indicators
- **KPI Charts**: Simple bar charts and progress rings for metric visualization
- **Status Indicators**: Color-coded badges and progress bars

### Forms & Interactions
- **File Upload**: Drag-and-drop zones with progress indicators
- **Todo Items**: Checkbox lists with priority indicators and due dates
- **Action Buttons**: Primary (solid blue), secondary (outline), and danger (red) variants

### Tables & Lists
- **Document Tables**: Sortable tables with file type icons and status columns
- **Todo Lists**: Organized by priority with visual hierarchy
- **Timeline Items**: Chronological list with timestamps and status indicators

## Specific Sections Design

### Mein Deal-Status
- Large status card with current phase prominently displayed
- Progress ring showing overall completion percentage
- Next steps summary with actionable items

### Dokumenten Management
- Grid layout for document categories
- Secure upload zones with encryption indicators
- Document request tracking with status badges

### Live KPI-Metriken
- Dashboard grid with metric cards
- Real-time data visualization
- Trend indicators and target comparisons

### Deal-Fortschritts-Zeitleiste
- Horizontal timeline with phase markers
- Current phase highlighted with brand color
- Expected completion dates with confidence indicators

### Open To-Dos
- Prioritized task list with due dates
- Category filtering and sorting options
- Progress tracking for multi-step tasks

## Accessibility & Responsiveness
- **Dark Mode**: Full support with adjusted color palette
- **Mobile-First**: Responsive grid that adapts to mobile screens
- **Keyboard Navigation**: Full keyboard accessibility for all interactions
- **High Contrast**: Ensure WCAG AA compliance for text and interactive elements

## Images
No large hero images required. Focus on:
- **Document thumbnails**: Small preview images for uploaded files
- **User avatars**: Profile images in navigation and activity feeds
- **Company logos**: Client company logos in deal overview sections
- **Status icons**: Visual indicators for different deal phases and document types