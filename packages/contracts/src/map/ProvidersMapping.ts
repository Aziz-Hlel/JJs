export const Providers = {
  google: 'google.com',
  apple: 'apple.com',
  email: 'email',
} as const;

export const ProvidersMapping = {
  [Providers.google]: 'google',
  [Providers.apple]: 'apple',
  [Providers.email]: 'email/password',
} as const;

export type ProviderType = keyof typeof ProvidersMapping;
export type MappedProviderType = (typeof ProvidersMapping)[ProviderType];
