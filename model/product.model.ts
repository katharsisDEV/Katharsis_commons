export class Product {
	public id: number;
	public name: string;
	public description: string;
	public price_net: string;
	public price_gross: string;
	public tax: string;
	public warehouse_quantity: string;
	public quantity: string;
	public quantity_unit: string = "pcs";
	public price_tax: string;
	public quantity_sold_in_invoices: string;
	public deleted: boolean = false;
	public code: string;
	public currency: string = "EUR";
	public stock_level: string;
	public ean_code: string;
	public weight: string;
	public weight_unit: string = "g";
	public size_height: string;
	public size_width: string;
	public size: string;
	public size_unit: string = "m";
	public attachments_count: number;
	public image_url: string;
	public tag_list: string[];
}
