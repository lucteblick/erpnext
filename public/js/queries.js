// Copyright (c) 2013, Web Notes Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

// searches for enabled profiles
wn.provide("erpnext.queries");
$.extend(erpnext.queries, {
	profile: function() {
		return { query: "core.doctype.profile.profile.profile_query" };
	},

	lead: function() {
		return { query: "controllers.queries.lead_query" };
	},

	customer: function() {
		return { query: "controllers.queries.customer_query" };
	},

	supplier: function() {
		return { query: "controllers.queries.supplier_query" };
	},

	account: function() {
		return { query: "controllers.queries.account_query" };
	},

	item: function(filters) {
		var args = { "query": "controllers.queries.item_query" };
		if(filters) args["filters"] = filters;
		return args;
	},

	bom: function() {
		return { query: "controllers.queries.bom" };
	},

	task: function() {
		return { query: "projects.utils.query_task" };
	},

	customer_filter: function(doc) {
		if(!doc.customer) {
			wn.throw(wn._("Please specify a") + " " +
				wn._(wn.meta.get_label(doc.doctype, "customer", doc.name)));
		}

		return { filters: { customer: doc.customer } };
	},

	supplier_filter: function(doc) {
		if(!doc.supplier) {
			wn.throw(wn._("Please specify a") + " " +
				wn._(wn.meta.get_label(doc.doctype, "supplier", doc.name)));
		}

		return { filters: { supplier: doc.supplier } };
	},

	lead_filter: function(doc) {
		if(!doc.lead) {
			wn.throw(wn._("Please specify a") + " " +
				wn._(wn.meta.get_label(doc.doctype, "lead", doc.name)));
		}

		return { filters: { lead: doc.lead } };
	},

	not_a_group_filter: function() {
		return { filters: { is_group: "No" } };
	},
});
