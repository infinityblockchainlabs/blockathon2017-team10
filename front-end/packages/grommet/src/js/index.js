// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP
var Grommet = {
  /**
   * Components.  Note that Collapsible and DateTimeDrop are private
   * and shouldn't be exposed here.
   */
  // Accordion: require('./components/Accordion'),
  // AccordionPanel: require('./components/AccordionPanel'),
  // Anchor: require('./components/Anchor'),
  // Animate: require('./components/Animate'),
  // App: require('./components/App'),
  // Article: require('./components/Article'),
  // AutoSuggest: require('./components/AutoSuggest'),
  // BadgeIcon: require('./components/BadgeIcon'),
  // Badges: require('./components/Badges'),
  Box: require('./components/Box'),
  Button: require('./components/Button'),
  // ButtonWithLoading: require('./components/ButtonWithLoading'),
  // ButtonNextPrev: require('./components/ButtonNextPrev'),
  // ButtonBar: require('./components/ButtonBar'),
  // BadgePoint: require('./components/BadgePoint'),
  // Card: require('./components/Card'),
  // Carousel: require('./components/Carousel'),
  // CheckBox: require('./components/CheckBox'),
  // CheckBoxGroup: require('./components/CheckBoxGroup'),
  // CheckBoxList: require('./components/CheckBoxList'),
  // Columns: require('./components/Columns'),
  // DatePicker: require('./components/DatePicker'),
  // DateRangePicker: require('./components/DateRangePicker'),
  // DateTimePicker: require('./components/DateTimePicker'),
  // DateTime: require('./components/DateTime'),
  // Distribution: require('./components/Distribution'),
  // DropDown: require('./components/DropDown'),
  // DonutChart: require('./components/DonutChart'),
  // EmptyContent: require('./components/EmptyContent'),
  // EmptyData: require('./components/EmptyData'),
  // ExplanationBox: require('./components/ExplanationBox'),
  // Footer: require('./components/Footer'),
  // Form: require('./components/Form'),
  // FormattedMessage: require('./components/FormattedMessage'),
  // FormField: require('./components/FormField'),
  // FormFields: require('./components/FormFields'),
  // FilterBar: require('./components/FilterBar'),
  // FilterSideBar: require('./components/FilterSideBar'),
  // Grommet: require('./components/Grommet'),
  // Header: require('./components/Header'),
  // Heading: require('./components/Heading'),
  // Headline: require('./components/Headline'),
  // Hero: require('./components/Hero'),
  // Image: require('./components/Image'),
  // Label: require('./components/Label'),
  // Layer: require('./components/Layer'),
  // Legend: require('./components/Legend'),
  // List: require('./components/List'),
  // ListItem: require('./components/ListItem'),
  // ListHorizontal: require('./components/ListHorizontal'),
  // ListWrapper: require('./components/ListWrapper'),
  // LightBox: require('./components/LightBox'),
  // Loading: require('./components/Loading'),
  // LoadingBox: require('./components/LoadingBox'),
  // LoginForm: require('./components/LoginForm'),
  // JobStatusItem: require('./components/JobStatusItem'),
  // JobStatusList: require('./components/JobStatusList'),
  // MainHeader: require('./components/MainHeader'),
  // MainHeaderMenu: require('./components/MainHeaderMenu'),
  // MainHeaderAction: require('./components/MainHeaderAction'),
  // Map: require('./components/Map'),
  // Markdown: require('./components/Markdown'),
  // Menu: require('./components/Menu'),
  // Meter: require('./components/Meter'),
  // MeterPoint: require('./components/MeterPoint'),
  // MonthPicker: require('./components/MonthPicker'),
  // Nav: require('./components/Nav'),
  // NavBalance: require('./components/NavBalance'),
  // NavNotification: require('./components/NavNotification'),
  // NavProfile: require('./components/NavProfile'),
  // Notification: require('./components/Notification'),
  // NumberingStep: require('./components/NumberingStep'),
  // NumberInput: require('./components/NumberInput'),
  // Object: require('./components/Object'),
  // Paragraph: require('./components/Paragraph'),
  // Popup: require('./components/Popup'),
  // Quote: require('./components/Quote'),
  // RadioButton: require('./components/RadioButton'),
  // ReactTags: require('./components/ReactTags'),
  // Search: require('./components/Search'),
  // SearchInput: require('./components/SearchInput'),
  // Section: require('./components/Section'),
  // Select: require('./components/Select'),
  // SelectMultiple: require('./components/SelectMultiple'),
  // SelectLocation: require('./components/SelectLocation'),
  // SelectShift: require('./components/SelectShift'),
  // RatingBar: require('./components/RatingBar'),
  // ReactSuperSelect: require('./components/ReactSuperSelect'),
  // Sidebar: require('./components/Sidebar'),
  // SkipLinkAnchor: require('./components/SkipLinkAnchor'),
  // SkipLinks: require('./components/SkipLinks'),
  // SocialShare: require('./components/SocialShare'),
  // Split: require('./components/Split'),
  // SunBurst: require('./components/SunBurst'),
  // SVGIcon: require('./components/SVGIcon'),
  // Slider: require('./components/Slider'),
  // StateProgress: require('./components/StateProgress'),
  // Tab: require('./components/Tab'),
  // Table: require('./components/Table'),
  // TableHeader: require('./components/TableHeader'),
  // TableRow: require('./components/TableRow'),
  // Tabs: require('./components/Tabs'),
  // TBD: require('./components/TBD'),
  // TextInput: require('./components/TextInput'),
  // Tile: require('./components/Tile'),
  // Tiles: require('./components/Tiles'),
  // Timestamp: require('./components/Timestamp'),
  // Tip: require('./components/Tip'),
  // Title: require('./components/Title'),
  // Toast: require('./components/Toast'),
  // Topology: require('./components/Topology'),
  // TriangleBox: require('./components/TriangleBox'),
  // TriangleFullBox: require('./components/TriangleFullBox'),
  // Value: require('./components/Value'),
  // VisualizationBar: require('./components/VisualizationBar'),
  // Video: require('./components/Video'),
  // WorldMap: require('./components/WorldMap'),
  // UploadAvatar: require('./components/UploadAvatar'),
  // UploadFullBody: require('./components/UploadFullBody'),
  // UploadCV: require('./components/UploadCV'),
  // UploadZone: require('./components/UploadZone'),
  // CollapsedTags: require('./components/CollapsedTags'),
  // CollapsedText: require('./components/CollapsedText'),
  // IntlNumber: require('./components/IntlNumber'),
  // IntlCurrency: require('./components/IntlCurrency'),
  // IntlDate: require('./components/IntlDate'),
  // ReviewBox: require('./components/ReviewBox'),
  Icons: {
    Grommet: require('./components/icons/Grommet'),
    Pulse: require('./components/icons/Pulse'),
    Spinning: require('./components/icons/Spinning'),
    Status: require('./components/icons/Status'),
    Base: require('./index-icons'),
    Magneto: require('./magneto-icons')
  },
  // Utils
  Cookies: require('./utils/Cookies'),
  DOM: require('./utils/DOM'),
  Drop: require('./utils/Drop'),
  KeyboardAccelerators: require('./utils/KeyboardAccelerators'),
  Locale: require('./utils/Locale'),
  Rest: require('./utils/Rest'),
  Validator: require('./utils/Validator'),
  TourAccordionPanel: require('./components/TourAccordionPanel'),
  General: require('./utils/General')
};

module.exports = Grommet;
