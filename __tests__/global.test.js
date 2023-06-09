import Ext from "../lib";

test('static', () => {
    expect(typeof Ext.setState).toBe('function');
	expect(typeof Ext.useEvent).toBe('function');
	expect(typeof Ext.useState).toBe('function');
});

test('dynamic', () => {
	const ext = new Ext;
	expect(typeof ext.setState).toBe('function');
	expect(typeof ext.useEvent).toBe('function');
	expect(typeof ext.useState).toBe('function');
});