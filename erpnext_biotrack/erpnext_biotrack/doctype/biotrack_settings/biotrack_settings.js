// Copyright (c) 2016, Webonyx and contributors
// For license information, please see license.txt

frappe.ui.form.on('BioTrack Settings', {
	refresh: function(frm) {
		if(!frm.doc.__islocal && frm.doc.enable_biotrack === 1){
			cur_frm.add_custom_button('<span class="octicon octicon-sync" aria-hidden="true"></span> ' + __('Sync BioTrack'),
				function() {
					frappe.call({
						method:"erpnext_biotrack.tasks.sync_biotrack"
					})
				}
			)
		}

		cur_frm.add_custom_button('<span class="octicon octicon-info" aria-hidden="true"></span> ' + __("BioTrack Log"), function() {
			frappe.set_route("List", "BioTrack Log");
		});
	}
});