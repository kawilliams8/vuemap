# Vue Map Application Spec

## Overview

A local-only application for tracking and planning hiking destinations in my county, with a focus on marking unvisited locations and areas for future exploration. The app allows users to mark locations as visited when completed.

## Core Features

### Map Interface

- Base map: Mapbox
- Default view: Entire county on initial load
- Location tracking: Display current user position using device GPS
- Offline capability: Store map tiles locally for offline viewing

### Location Types

1. **Pins** (GPS coordinates)
   - Represent specific points of interest
   - Include name, trailhead access information, and description
   - Visually distinguish between visited/unvisited status
2. **Areas** (Editable polygons)
   - Represent regions or zones to explore
   - Include same metadata as pins
   - Visually distinguish between visited/unvisited status

### Data Management

- **Persistence**: Both automatic saving and manual save option
- **Local storage**: All data stored on device only
- **Confirmation dialogs**: For potentially destructive actions (deletion, etc.)

### User Interface Elements

#### Main Map

- Interactive map taking majority of screen space
- Click to add new pins/areas
- Hover over pins/areas to see preview information
- Visual indicators for visited vs. unvisited locations

#### Controls Panel/Sidebar

- Toggle to hide/show visited locations
- Save/load buttons
- List of existing locations with sorting options
- Add button for new locations

#### Responsive Design

- Drawer menu from bottom/side for mobile devices
- Supports desktop, tablet, and phone viewing

#### Location Creation/Editing

- Click "Add" button to open movable dialog
- Dialog allows selection of location type (pin or area)
- Fields for name, trailhead access, and description
- Options to mark as visited, including visit date
- For polygons: Ability to edit individual points after creation

#### Visual Theme

- 6 predefined color schemes
- Options optimized for both outdoor and indoor viewing
- User can select preferred scheme but not create custom schemes

## Future Considerations (Not in Initial Scope)

- Import/export capabilities
- Route tracking
- Post-visit notes
- Photo attachments
- Categories/labels for locations
- Sharing capabilities
- Manual coordinate entry
- Performance optimization for large numbers of locations

## Technical Requirements

- Vue 3 frontend
- GraphQL for data management
- Node backend running locally
- Mapbox integration
- Support for all modern browsers
- Responsive design for all device sizes
