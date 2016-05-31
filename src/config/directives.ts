import {forwardRef, Type} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';

import {Menu} from '../components/menu/menu';
import {MenuToggle} from '../components/menu/menu-toggle';
import {MenuClose} from '../components/menu/menu-close';
import {Badge} from '../components/badge/badge';
import {Button} from '../components/button/button';
import {Content} from '../components/content/content';
import {Img} from '../components/img/img';
import {Scroll} from '../components/scroll/scroll';
import {InfiniteScroll} from '../components/infinite-scroll/infinite-scroll';
import {InfiniteScrollContent} from '../components/infinite-scroll/infinite-scroll-content';
import {Refresher} from '../components/refresher/refresher';
import {RefresherContent} from '../components/refresher/refresher-content';
import {Slides, Slide, SlideLazy} from '../components/slides/slides';
import {Tabs} from '../components/tabs/tabs';
import {Tab} from '../components/tabs/tab';
import {List, ListHeader} from '../components/list/list';
import {Item} from '../components/item/item';
import {ItemSliding} from '../components/item/item-sliding';
import {VirtualScroll} from '../components/virtual-scroll/virtual-scroll';
import {VirtualItem, VirtualHeader, VirtualFooter} from '../components/virtual-scroll/virtual-item';
import {Toolbar, ToolbarTitle, ToolbarItem} from '../components/toolbar/toolbar';
import {Icon} from '../components/icon/icon';
import {Spinner} from '../components/spinner/spinner';
import {Checkbox} from '../components/checkbox/checkbox';
import {Select} from '../components/select/select';
import {Option} from '../components/option/option';
import {DateTime} from '../components/datetime/datetime';
import {Toggle} from '../components/toggle/toggle';
import {TextInput, TextArea} from '../components/input/input';
import {Label} from '../components/label/label';
import {Segment, SegmentButton} from '../components/segment/segment';
import {RadioButton} from '../components/radio/radio-button';
import {RadioGroup} from '../components/radio/radio-group';
import {Searchbar, SearchbarInput} from '../components/searchbar/searchbar';
import {Nav} from '../components/nav/nav';
import {NavPush, NavPop} from '../components/nav/nav-push';
import {NavRouter} from '../components/nav/nav-router';
import {NavbarTemplate, Navbar} from '../components/navbar/navbar';
import {ShowWhen, HideWhen} from '../components/show-hide-when/show-hide-when';

/**
 * @name IONIC_DIRECTIVES
 * @description
 * The core Ionic directives as well as Angular's `CORE_DIRECTIVES` and `FORM_DIRECTIVES` are
 * available automatically when you bootstrap your app with the `ionicBootstrap`. This means
 * if you are using custom components you do not need to import `IONIC_DIRECTIVES` as they
 * are part of the app's default directives.
 *
 *
 * #### Angular
 * - CORE_DIRECTIVES
 * - FORM_DIRECTIVES
 *
 * #### Ionic
 * - Menu
 * - MenuToggle
 * - MenuClose
 * - Badge
 * - Button
 * - Content
 * - Scroll
 * - InfiniteScroll
 * - InfiniteScrollContent
 * - Refresher
 * - RefresherContent
 * - Img
 * - List
 * - ListHeader
 * - Item
 * - ItemSliding
 * - VirtualScroll
 * - VirtualItem
 * - VirtualHeader
 * - VirtualFooter
 * - Slides
 * - Slide
 * - SlideLazy
 * - Tabs
 * - Tab
 * - Toolbar
 * - ToolbarTitle
 * - ToolbarItem
 * - Icon
 * - Spinner
 * - Searchbar
 * - SearchbarInput
 * - Segment
 * - SegmentButton
 * - Checkbox
 * - RadioGroup
 * - RadioButton
 * - Select
 * - Option
 * - DateTime
 * - Toggle
 * - TextArea
 * - TextInput
 * - Label
 * - Nav
 * - NavbarTemplate
 * - Navbar
 * - NavPush
 * - NavPop
 * - NavRouter
 * - IdRef
 * - ShowWhen
 * - HideWhen
 */
export const IONIC_DIRECTIVES: any[] = [
  // Angular
  CORE_DIRECTIVES,
  FORM_DIRECTIVES,

  // Content
  Menu,
  MenuToggle,
  MenuClose,

  Badge,
  Button,
  Content,
  Scroll,
  InfiniteScroll,
  InfiniteScrollContent,
  Refresher,
  RefresherContent,
  Img,

  // Lists
  List,
  ListHeader,
  Item,
  ItemSliding,
  VirtualScroll,
  VirtualItem,
  VirtualHeader,
  VirtualFooter,

  // Slides
  Slides,
  Slide,
  SlideLazy,

  // Tabs
  Tabs,
  Tab,

  // Toolbar
  Toolbar,
  ToolbarTitle,
  ToolbarItem,

  // Media
  Icon,
  Spinner,

  // Forms
  Searchbar,
  SearchbarInput,
  Segment,
  SegmentButton,
  Checkbox,
  RadioGroup,
  RadioButton,
  Select,
  Option,
  DateTime,
  Toggle,
  TextArea,
  TextInput,
  Label,

  // Nav
  Nav,
  NavbarTemplate,
  Navbar,

  NavPush,
  NavPop,
  NavRouter,

  ShowWhen,
  HideWhen
];