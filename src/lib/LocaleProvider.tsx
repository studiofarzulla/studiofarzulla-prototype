'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import type { Locale } from '@/types';

interface LocaleContextType {
  locale: Locale;
  messages: Record<string, any>;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

// Helper function to get nested translation
function getNestedTranslation(messages: Record<string, any>, key: string): string {
  const keys = key.split('.');
  let result = messages;
  
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = result[k];
    } else {
      return key; // Return key if not found
    }
  }
  
  return typeof result === 'string' ? result : key;
}

interface LocaleProviderProps {
  locale: string;
  messages: Record<string, any>;
  children: ReactNode;
}

export function LocaleProvider({ locale, messages, children }: LocaleProviderProps) {
  const t = (key: string) => getNestedTranslation(messages, key);
  
  const value: LocaleContextType = {
    locale: locale as Locale,
    messages,
    t,
  };
  
  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

// Hook to use the locale context
export function useLocale(): Locale {
  const context = useContext(LocaleContext);
  if (!context) {
    return 'en'; // Fallback
  }
  return context.locale;
}

// Hook to use translations
export function useTranslations(namespace?: string) {
  const context = useContext(LocaleContext);
  if (!context) {
    return (key: string) => key; // Fallback
  }
  
  return (key: string) => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    return context.t(fullKey);
  };
}
