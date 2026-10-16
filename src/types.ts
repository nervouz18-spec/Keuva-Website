export type NavTab = 'beranda' | 'layanan' | 'portofolio' | 'paket-harga' | 'proses' | 'kontak';

export interface PushNotification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  type: 'lead' | 'audit' | 'launch' | 'update' | 'promo';
  unread: boolean;
  actionUrl?: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  category: string;
  title: string;
  description: string;
  metricBadge: string;
  loadSpeed: string;
  bounceRateChange?: string;
  imageUrl: string;
  imageAlt: string;
  tags: string[];
  results: {
    label: string;
    value: string;
  }[];
  challenge?: string;
  solution?: string;
}

export interface ServiceDetail {
  id: string;
  number: string;
  badge: string;
  badgeTag: string;
  title: string;
  tagline: string;
  description: string;
  features: {
    icon: string;
    title: string;
    desc: string;
  }[];
  duration: string;
  growthStat: string;
  growthLabel: string;
  category: 'landing-page' | 'company-profile' | 'ecommerce' | 'redesign';
  imageUrl: string;
  imageAlt: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  description: string;
  oneTimePrice: number;
  monthlyPrice: number;
  deliveryTime: string;
  featured?: boolean;
  features: string[];
  subFeaturesTitle: string;
  subFeatures: string[];
}
