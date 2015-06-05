this["template"] = this["template"] || {};
this["template"]["example"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "\n\n<div class=\"listItems\">\n  <div class=\"beforeItem\">\n    <div class=\"content\">\n\n    "
    + this.escapeExpression(((helper = (helper = helpers.taskText || (depth0 != null ? depth0.taskText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"taskText","hash":{},"data":data}) : helper)))
    + "\n\n\n\n    </div>\n  </div>\n</div>\n";
},"useData":true});