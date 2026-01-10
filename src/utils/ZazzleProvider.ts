/**
 * Zazzle Print-on-Demand Integration Utility
 * BrandCraft 2026 - Marketplace Provider
 */

export interface ZazzleProductParams {
  brandName: string;
  primaryColor: string;
  category?: 'tshirts' | 'mugs' | 'stickers' | 'cards' | 'posters';
  affiliateId?: string;
}

export class ZazzleProvider {
  private static readonly BASE_URL = 'https://www.zazzle.com';
  private static readonly DEFAULT_AFFILIATE_ID = '238894403392654484'; // Your Zazzle affiliate ID

  /**
   * Generate Zazzle product search URL with brand parameters
   */
  static generateProductUrl(params: ZazzleProductParams): string {
    const { brandName, category, affiliateId } = params;
    const searchQuery = category 
      ? `${brandName} ${category} custom`
      : `${brandName} custom products`;
    
    const encodedQuery = encodeURIComponent(searchQuery);
    const refId = affiliateId || this.DEFAULT_AFFILIATE_ID;
    
    return `${this.BASE_URL}/s/${encodedQuery}?rf=${refId}`;
  }

  /**
   * Generate custom product design URL (for future API integration)
   */
  static generateCustomDesignUrl(params: ZazzleProductParams): string {
    // Placeholder for future Zazzle API integration
    // Will allow direct product creation with uploaded logo
    return this.generateProductUrl(params);
  }

  /**
   * Get suggested product categories based on brand style
   */
  static getSuggestedCategories(brandStyle: string): string[] {
    const categoryMap: { [key: string]: string[] } = {
      'Minimal Modern': ['cards', 'posters', 'tshirts'],
      'Bold & Vibrant': ['stickers', 'mugs', 'tshirts'],
      'Tech & Innovation': ['posters', 'cards', 'mugs'],
      'Elegant Classic': ['cards', 'posters', 'mugs'],
      'Creative Abstract': ['posters', 'tshirts', 'stickers'],
      'Corporate Professional': ['cards', 'mugs', 'posters']
    };
    
    return categoryMap[brandStyle] || ['tshirts', 'mugs', 'stickers'];
  }
}

// Export utility functions
export const generateZazzleUrl = (brandName: string, color: string) => {
  return ZazzleProvider.generateProductUrl({ brandName, primaryColor: color });
};
