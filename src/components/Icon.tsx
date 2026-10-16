import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  ArrowLeft,
  ArrowLeftRight,
  ArrowRight,
  Badge,
  BadgeCheck,
  BarChart3,
  Bell,
  BellOff,
  Braces,
  Brush,
  Building2,
  Calendar,
  CalendarDays,
  Check,
  ChevronDown,
  CircleCheck,
  CircleHelp,
  Clock,
  CloudCog,
  Code,
  Compass,
  Contact,
  Cpu,
  CreditCard,
  FilePen,
  FolderTree,
  Gauge,
  Globe,
  Headphones,
  Image,
  Info,
  Languages,
  LayoutDashboard,
  LoaderCircle,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessageSquare,
  MonitorSmartphone,
  MoreVertical,
  Package,
  Palette,
  PenTool,
  Pencil,
  Receipt,
  RefreshCw,
  Rocket,
  Ruler,
  Save,
  Send,
  Server,
  Shield,
  ShieldCheck,
  ShoppingCart,
  ShoppingBag,
  Sparkles,
  Star,
  Terminal,
  ThumbsUp,
  Timer,
  TrendingUp,
  TriangleAlert,
  Truck,
  Volume2,
  VolumeX,
  Wallet,
  Wrench,
  X,
  Zap,
} from 'lucide-react';

interface IconEntry {
  icon: LucideIcon;
  filledByDefault?: boolean;
}

const ICONS: Record<string, IconEntry> = {
  account_balance_wallet: { icon: Wallet },
  account_tree: { icon: FolderTree },
  architecture: { icon: Ruler },
  arrow_back: { icon: ArrowLeft },
  arrow_forward: { icon: ArrowRight },
  badge: { icon: Badge },
  bolt: { icon: Zap },
  calendar_month: { icon: Calendar },
  calendar_today: { icon: CalendarDays },
  chat: { icon: MessageCircle },
  check: { icon: Check },
  check_circle: { icon: CircleCheck },
  clean_hands: { icon: Sparkles },
  close: { icon: X },
  cloud_sync: { icon: CloudCog },
  code_blocks: { icon: Braces },
  code_off: { icon: Code },
  contact_phone: { icon: Contact },
  dashboard_customize: { icon: LayoutDashboard },
  data_object: { icon: Braces },
  design_services: { icon: PenTool },
  devices: { icon: MonitorSmartphone },
  dns: { icon: Server },
  domain: { icon: Building2 },
  edit_note: { icon: Pencil },
  expand_more: { icon: ChevronDown },
  explore: { icon: Compass },
  forum: { icon: MessageSquare },
  image: { icon: Image },
  info: { icon: Info },
  insights: { icon: BarChart3 },
  inventory_2: { icon: Package },
  local_shipping: { icon: Truck },
  location_on: { icon: MapPin },
  lock: { icon: Lock },
  mail: { icon: Mail },
  memory: { icon: Cpu },
  menu: { icon: Menu },
  monitoring: { icon: Activity },
  more_vert: { icon: MoreVertical },
  notifications: { icon: Bell },
  notifications_paused: { icon: BellOff },
  palette: { icon: Palette },
  payments: { icon: CreditCard },
  point_of_sale: { icon: Receipt },
  progress_activity: { icon: LoaderCircle },
  published_with_changes: { icon: RefreshCw },
  rocket_launch: { icon: Rocket },
  save_as: { icon: Save },
  schedule: { icon: Clock },
  security: { icon: Shield },
  security_update_good: { icon: ShieldCheck },
  send: { icon: Send },
  shield: { icon: Shield },
  shopping_bag: { icon: ShoppingBag },
  shopping_cart_checkout: { icon: ShoppingCart },
  speed: { icon: Gauge },
  star: { icon: Star, filledByDefault: true },
  style: { icon: Brush },
  support_agent: { icon: Headphones },
  swap_horiz: { icon: ArrowLeftRight },
  task_alt: { icon: CircleCheck },
  terminal: { icon: Terminal },
  thumb_up: { icon: ThumbsUp },
  timer_10: { icon: Timer },
  translate: { icon: Languages },
  travel_explore: { icon: Globe },
  trending_up: { icon: TrendingUp },
  troubleshoot: { icon: Wrench },
  verified: { icon: BadgeCheck },
  verified_user: { icon: ShieldCheck },
  volume_off: { icon: VolumeX },
  volume_up: { icon: Volume2 },
  warning: { icon: TriangleAlert },
};

interface IconProps {
  name: string;
  className?: string;
  filled?: boolean;
}

export function Icon({ name, className, filled }: IconProps) {
  const entry = ICONS[name];
  if (!entry && import.meta.env.DEV) {
    console.warn(`Icon "${name}" not found in icon map`);
  }
  const Component = entry?.icon ?? CircleHelp;
  const isFilled = filled ?? entry?.filledByDefault ?? false;
  return (
    <Component
      className={className}
      width="1em"
      height="1em"
      fill={isFilled ? 'currentColor' : 'none'}
      strokeWidth={isFilled ? 0 : 2}
      aria-hidden="true"
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    />
  );
}
