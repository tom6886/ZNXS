/*
 * jQuery Pines Notify (pnotify) Plugin 1.2.0
 *
 * http://pinesframework.org/pnotify/
 * Copyright (c) 2009-2012 Hunter Perrin
 *
 * Triple license under the GPL, LGPL, and MPL:
 *	  http://www.gnu.org/licenses/gpl.html
 *	  http://www.gnu.org/licenses/lgpl.html
 *	  http://www.mozilla.org/MPL/MPL-1.1.html
 */
(function (d) {
    var q, j, r, i = d(window), u = {
        jqueryui: {
            container: "ui-widget ui-widget-content ui-corner-all", notice: "ui-state-highlight", notice_icon: "ui-icon ui-icon-info", info: "", info_icon: "ui-icon ui-icon-info", success: "ui-state-default", success_icon: "ui-icon ui-icon-circle-check", error: "ui-state-error", error_icon: "ui-icon ui-icon-alert", closer: "ui-icon ui-icon-close", pin_up: "ui-icon ui-icon-pin-w", pin_down: "ui-icon ui-icon-pin-s", hi_menu: "ui-state-default ui-corner-bottom", hi_btn: "ui-state-default ui-corner-all",
            hi_btnhov: "ui-state-hover", hi_hnd: "ui-icon ui-icon-grip-dotted-horizontal"
        }, bootstrap: { container: "alert", notice: "", notice_icon: "icon-exclamation-sign", info: "alert-info", info_icon: "icon-info-sign", success: "alert-success", success_icon: "icon-ok-sign", error: "alert-error", error_icon: "icon-warning-sign", closer: "icon-remove", pin_up: "icon-pause", pin_down: "icon-play", hi_menu: "well", hi_btn: "btn", hi_btnhov: "", hi_hnd: "icon-chevron-down" }
    }, s = function () {
        r = d("body"); i = d(window); i.bind("resize", function () {
            j && clearTimeout(j);
            j = setTimeout(d.pnotify_position_all, 10)
        })
    }; document.body ? s() : d(s); d.extend({
        pnotify_remove_all: function () { var e = i.data("pnotify"); e && e.length && d.each(e, function () { this.pnotify_remove && this.pnotify_remove() }) }, pnotify_position_all: function () { j && clearTimeout(j); j = null; var e = i.data("pnotify"); e && e.length && (d.each(e, function () { var d = this.opts.stack; if (d) d.nextpos1 = d.firstpos1, d.nextpos2 = d.firstpos2, d.addpos2 = 0, d.animation = true }), d.each(e, function () { this.pnotify_position() })) }, pnotify: function (e) {
            var g,
            a; typeof e != "object" ? (a = d.extend({}, d.pnotify.defaults), a.text = e) : a = d.extend({}, d.pnotify.defaults, e); for (var p in a) typeof p == "string" && p.match(/^pnotify_/) && (a[p.replace(/^pnotify_/, "")] = a[p]); if (a.before_init && a.before_init(a) === false) return null; var k, o = function (a, c) {
                b.css("display", "none"); var f = document.elementFromPoint(a.clientX, a.clientY); b.css("display", "block"); var e = d(f), g = e.css("cursor"); b.css("cursor", g != "auto" ? g : "default"); if (!k || k.get(0) != f) k && (n.call(k.get(0), "mouseleave", a.originalEvent),
                n.call(k.get(0), "mouseout", a.originalEvent)), n.call(f, "mouseenter", a.originalEvent), n.call(f, "mouseover", a.originalEvent); n.call(f, c, a.originalEvent); k = e
            }, f = u[a.styling], b = d("<div />", {
                "class": "ui-pnotify " + a.addclass, css: { display: "none" }, mouseenter: function (l) {
                    a.nonblock && l.stopPropagation(); a.mouse_reset && g == "out" && (b.stop(true), g = "in", b.css("height", "auto").animate({ width: a.width, opacity: a.nonblock ? a.nonblock_opacity : a.opacity }, "fast")); a.nonblock && b.animate({ opacity: a.nonblock_opacity }, "fast");
                    a.hide && a.mouse_reset && b.pnotify_cancel_remove(); a.sticker && !a.nonblock && b.sticker.trigger("pnotify_icon").css("visibility", "visible"); a.closer && !a.nonblock && b.closer.css("visibility", "visible")
                }, mouseleave: function (l) { a.nonblock && l.stopPropagation(); k = null; b.css("cursor", "auto"); a.nonblock && g != "out" && b.animate({ opacity: a.opacity }, "fast"); a.hide && a.mouse_reset && b.pnotify_queue_remove(); a.sticker_hover && b.sticker.css("visibility", "hidden"); a.closer_hover && b.closer.css("visibility", "hidden"); d.pnotify_position_all() },
                mouseover: function (b) { a.nonblock && b.stopPropagation() }, mouseout: function (b) { a.nonblock && b.stopPropagation() }, mousemove: function (b) { a.nonblock && (b.stopPropagation(), o(b, "onmousemove")) }, mousedown: function (b) { a.nonblock && (b.stopPropagation(), b.preventDefault(), o(b, "onmousedown")) }, mouseup: function (b) { a.nonblock && (b.stopPropagation(), b.preventDefault(), o(b, "onmouseup")) }, click: function (b) { a.nonblock && (b.stopPropagation(), o(b, "onclick")) }, dblclick: function (b) { a.nonblock && (b.stopPropagation(), o(b, "ondblclick")) }
            });
            b.opts = a; b.container = d("<div />", { "class": f.container + " ui-pnotify-container " + (a.type == "error" ? f.error : a.type == "info" ? f.info : a.type == "success" ? f.success : f.notice) }).appendTo(b); a.cornerclass != "" && b.container.removeClass("ui-corner-all").addClass(a.cornerclass); a.shadow && b.container.addClass("ui-pnotify-shadow"); b.pnotify_version = "1.2.0"; b.pnotify = function (l) {
                var c = a; typeof l == "string" ? a.text = l : a = d.extend({}, a, l); for (var e in a) typeof e == "string" && e.match(/^pnotify_/) && (a[e.replace(/^pnotify_/, "")] =
                a[e]); b.opts = a; a.cornerclass != c.cornerclass && b.container.removeClass("ui-corner-all").addClass(a.cornerclass); a.shadow != c.shadow && (a.shadow ? b.container.addClass("ui-pnotify-shadow") : b.container.removeClass("ui-pnotify-shadow")); a.addclass === false ? b.removeClass(c.addclass) : a.addclass !== c.addclass && b.removeClass(c.addclass).addClass(a.addclass); a.title === false ? b.title_container.slideUp("fast") : a.title !== c.title && (a.title_escape ? b.title_container.text(a.title).slideDown(200) : b.title_container.html(a.title).slideDown(200));
                a.text === false ? b.text_container.slideUp("fast") : a.text !== c.text && (a.text_escape ? b.text_container.text(a.text).slideDown(200) : b.text_container.html(a.insert_brs ? String(a.text).replace(/\n/g, "<br />") : a.text).slideDown(200)); b.pnotify_history = a.history; b.pnotify_hide = a.hide; a.type != c.type && b.container.removeClass(f.error + " " + f.notice + " " + f.success + " " + f.info).addClass(a.type == "error" ? f.error : a.type == "info" ? f.info : a.type == "success" ? f.success : f.notice); if (a.icon !== c.icon || a.icon === true && a.type != c.type) b.container.find("div.ui-pnotify-icon").remove(),
                a.icon !== false && d("<div />", { "class": "ui-pnotify-icon" }).append(d("<span />", { "class": a.icon === true ? a.type == "error" ? f.error_icon : a.type == "info" ? f.info_icon : a.type == "success" ? f.success_icon : f.notice_icon : a.icon })).prependTo(b.container); a.width !== c.width && b.animate({ width: a.width }); a.min_height !== c.min_height && b.container.animate({ minHeight: a.min_height }); a.opacity !== c.opacity && b.fadeTo(a.animate_speed, a.opacity); !a.closer || a.nonblock ? b.closer.css("display", "none") : b.closer.css("display", "block");
                !a.sticker || a.nonblock ? b.sticker.css("display", "none") : b.sticker.css("display", "block"); b.sticker.trigger("pnotify_icon"); a.sticker_hover ? b.sticker.css("visibility", "hidden") : a.nonblock || b.sticker.css("visibility", "visible"); a.closer_hover ? b.closer.css("visibility", "hidden") : a.nonblock || b.closer.css("visibility", "visible"); a.hide ? c.hide || b.pnotify_queue_remove() : b.pnotify_cancel_remove(); b.pnotify_queue_position(); return b
            }; b.pnotify_position = function (a) {
                var c = b.opts.stack; if (c) {
                    if (!c.nextpos1) c.nextpos1 =
                    c.firstpos1; if (!c.nextpos2) c.nextpos2 = c.firstpos2; if (!c.addpos2) c.addpos2 = 0; var d = b.css("display") == "none"; if (!d || a) {
                        var f, e = {}, g; switch (c.dir1) { case "down": g = "top"; break; case "up": g = "bottom"; break; case "left": g = "right"; break; case "right": g = "left" } a = parseInt(b.css(g)); isNaN(a) && (a = 0); if (typeof c.firstpos1 == "undefined" && !d) c.firstpos1 = a, c.nextpos1 = c.firstpos1; var h; switch (c.dir2) { case "down": h = "top"; break; case "up": h = "bottom"; break; case "left": h = "right"; break; case "right": h = "left" } f = parseInt(b.css(h));
                        isNaN(f) && (f = 0); if (typeof c.firstpos2 == "undefined" && !d) c.firstpos2 = f, c.nextpos2 = c.firstpos2; if (c.dir1 == "down" && c.nextpos1 + b.height() > i.height() || c.dir1 == "up" && c.nextpos1 + b.height() > i.height() || c.dir1 == "left" && c.nextpos1 + b.width() > i.width() || c.dir1 == "right" && c.nextpos1 + b.width() > i.width()) c.nextpos1 = c.firstpos1, c.nextpos2 += c.addpos2 + (typeof c.spacing2 == "undefined" ? 25 : c.spacing2), c.addpos2 = 0; if (c.animation && c.nextpos2 < f) switch (c.dir2) {
                            case "down": e.top = c.nextpos2 + "px"; break; case "up": e.bottom = c.nextpos2 +
                            "px"; break; case "left": e.right = c.nextpos2 + "px"; break; case "right": e.left = c.nextpos2 + "px"
                        } else b.css(h, c.nextpos2 + "px"); switch (c.dir2) { case "down": case "up": if (b.outerHeight(true) > c.addpos2) c.addpos2 = b.height(); break; case "left": case "right": if (b.outerWidth(true) > c.addpos2) c.addpos2 = b.width() } if (c.nextpos1) if (c.animation && (a > c.nextpos1 || e.top || e.bottom || e.right || e.left)) switch (c.dir1) {
                            case "down": e.top = c.nextpos1 + "px"; break; case "up": e.bottom = c.nextpos1 + "px"; break; case "left": e.right = c.nextpos1 + "px";
                                break; case "right": e.left = c.nextpos1 + "px"
                        } else b.css(g, c.nextpos1 + "px"); (e.top || e.bottom || e.right || e.left) && b.animate(e, { duration: 500, queue: false }); switch (c.dir1) { case "down": case "up": c.nextpos1 += b.height() + (typeof c.spacing1 == "undefined" ? 25 : c.spacing1); break; case "left": case "right": c.nextpos1 += b.width() + (typeof c.spacing1 == "undefined" ? 25 : c.spacing1) }
                    }
                }
            }; b.pnotify_queue_position = function (a) { j && clearTimeout(j); a || (a = 10); j = setTimeout(d.pnotify_position_all, a) }; b.pnotify_display = function () {
                b.parent().length ||
                b.appendTo(r); a.before_open && a.before_open(b) === false || (a.stack.push != "top" && b.pnotify_position(true), a.animation == "fade" || a.animation.effect_in == "fade" ? b.show().fadeTo(0, 0).hide() : a.opacity != 1 && b.show().fadeTo(0, a.opacity).hide(), b.animate_in(function () { a.after_open && a.after_open(b); b.pnotify_queue_position(); a.hide && b.pnotify_queue_remove() }))
            }; b.pnotify_remove = function () {
                if (b.timer) window.clearTimeout(b.timer), b.timer = null; a.before_close && a.before_close(b) === false || b.animate_out(function () {
                    a.after_close &&
                    a.after_close(b) === false || (b.pnotify_queue_position(), a.remove && b.detach())
                })
            }; b.animate_in = function (d) { g = "in"; var c; c = typeof a.animation.effect_in != "undefined" ? a.animation.effect_in : a.animation; c == "none" ? (b.show(), d()) : c == "show" ? b.show(a.animate_speed, d) : c == "fade" ? b.show().fadeTo(a.animate_speed, a.opacity, d) : c == "slide" ? b.slideDown(a.animate_speed, d) : typeof c == "function" ? c("in", d, b) : b.show(c, typeof a.animation.options_in == "object" ? a.animation.options_in : {}, a.animate_speed, d) }; b.animate_out = function (d) {
                g =
                "out"; var c; c = typeof a.animation.effect_out != "undefined" ? a.animation.effect_out : a.animation; c == "none" ? (b.hide(), d()) : c == "show" ? b.hide(a.animate_speed, d) : c == "fade" ? b.fadeOut(a.animate_speed, d) : c == "slide" ? b.slideUp(a.animate_speed, d) : typeof c == "function" ? c("out", d, b) : b.hide(c, typeof a.animation.options_out == "object" ? a.animation.options_out : {}, a.animate_speed, d)
            }; b.pnotify_cancel_remove = function () { b.timer && window.clearTimeout(b.timer) }; b.pnotify_queue_remove = function () {
                b.pnotify_cancel_remove(); b.timer =
                window.setTimeout(function () { b.pnotify_remove() }, isNaN(a.delay) ? 0 : a.delay)
            }; b.closer = d("<div />", { "class": "ui-pnotify-closer", css: { cursor: "pointer", visibility: a.closer_hover ? "hidden" : "visible" }, click: function () { b.pnotify_remove(); b.sticker.css("visibility", "hidden"); b.closer.css("visibility", "hidden") } }).append(d("<span />", { "class": f.closer })).appendTo(b.container); (!a.closer || a.nonblock) && b.closer.css("display", "none"); b.sticker = d("<div />", {
                "class": "ui-pnotify-sticker", css: {
                    cursor: "pointer", visibility: a.sticker_hover ?
                    "hidden" : "visible"
                }, click: function () { a.hide = !a.hide; a.hide ? b.pnotify_queue_remove() : b.pnotify_cancel_remove(); d(this).trigger("pnotify_icon") }
            }).bind("pnotify_icon", function () { d(this).children().removeClass(f.pin_up + " " + f.pin_down).addClass(a.hide ? f.pin_up : f.pin_down) }).append(d("<span />", { "class": f.pin_up })).appendTo(b.container); (!a.sticker || a.nonblock) && b.sticker.css("display", "none"); a.icon !== false && d("<div />", { "class": "ui-pnotify-icon" }).append(d("<span />", {
                "class": a.icon === true ? a.type == "error" ?
                f.error_icon : a.type == "info" ? f.info_icon : a.type == "success" ? f.success_icon : f.notice_icon : a.icon
            })).prependTo(b.container); b.title_container = d("<h4 />", { "class": "ui-pnotify-title" }).appendTo(b.container); a.title === false ? b.title_container.hide() : a.title_escape ? b.title_container.text(a.title) : b.title_container.html(a.title); b.text_container = d("<div />", { "class": "ui-pnotify-text" }).appendTo(b.container); a.text === false ? b.text_container.hide() : a.text_escape ? b.text_container.text(a.text) : b.text_container.html(a.insert_brs ?
            String(a.text).replace(/\n/g, "<br />") : a.text); typeof a.width == "string" && b.css("width", a.width); typeof a.min_height == "string" && b.container.css("min-height", a.min_height); b.pnotify_history = a.history; b.pnotify_hide = a.hide; var h = i.data("pnotify"); if (h == null || typeof h != "object") h = []; h = a.stack.push == "top" ? d.merge([b], h) : d.merge(h, [b]); i.data("pnotify", h); a.stack.push == "top" && b.pnotify_queue_position(1); a.after_init && a.after_init(b); if (a.history) {
                var m = i.data("pnotify_history"); typeof m == "undefined" && (m =
                d("<div />", { "class": "ui-pnotify-history-container " + f.hi_menu, mouseleave: function () { m.animate({ top: "-" + q + "px" }, { duration: 100, queue: false }) } }).append(d("<div />", { "class": "ui-pnotify-history-header", text: "Redisplay" })).append(d("<button />", {
                    "class": "ui-pnotify-history-all " + f.hi_btn, text: "All", mouseenter: function () { d(this).addClass(f.hi_btnhov) }, mouseleave: function () { d(this).removeClass(f.hi_btnhov) }, click: function () {
                        d.each(h, function () {
                            this.pnotify_history && (this.is(":visible") ? this.pnotify_hide &&
                            this.pnotify_queue_remove() : this.pnotify_display && this.pnotify_display())
                        }); return false
                    }
                })).append(d("<button />", { "class": "ui-pnotify-history-last " + f.hi_btn, text: "Last", mouseenter: function () { d(this).addClass(f.hi_btnhov) }, mouseleave: function () { d(this).removeClass(f.hi_btnhov) }, click: function () { var a = -1, b; do { b = a == -1 ? h.slice(a) : h.slice(a, a + 1); if (!b[0]) break; a-- } while (!b[0].pnotify_history || b[0].is(":visible")); if (!b[0]) return false; b[0].pnotify_display && b[0].pnotify_display(); return false } })).appendTo(r),
                q = d("<span />", { "class": "ui-pnotify-history-pulldown " + f.hi_hnd, mouseenter: function () { m.animate({ top: "0" }, { duration: 100, queue: false }) } }).appendTo(m).offset().top + 2, m.css({ top: "-" + q + "px" }), i.data("pnotify_history", m))
            } a.stack.animation = false; b.pnotify_display(); return b
        }
    }); var t = /^on/, v = /^(dbl)?click$|^mouse(move|down|up|over|out|enter|leave)$|^contextmenu$/, w = /^(focus|blur|select|change|reset)$|^key(press|down|up)$/, x = /^(scroll|resize|(un)?load|abort|error)$/, n = function (e, g) {
        var a, e = e.toLowerCase();
        document.createEvent && this.dispatchEvent ? (e = e.replace(t, ""), e.match(v) ? (d(this).offset(), a = document.createEvent("MouseEvents"), a.initMouseEvent(e, g.bubbles, g.cancelable, g.view, g.detail, g.screenX, g.screenY, g.clientX, g.clientY, g.ctrlKey, g.altKey, g.shiftKey, g.metaKey, g.button, g.relatedTarget)) : e.match(w) ? (a = document.createEvent("UIEvents"), a.initUIEvent(e, g.bubbles, g.cancelable, g.view, g.detail)) : e.match(x) && (a = document.createEvent("HTMLEvents"), a.initEvent(e, g.bubbles, g.cancelable)), a && this.dispatchEvent(a)) :
        (e.match(t) || (e = "on" + e), a = document.createEventObject(g), this.fireEvent(e, a))
    }; d.pnotify.defaults = {
        title: false, title_escape: false, text: false, text_escape: false, styling: "bootstrap", addclass: "", cornerclass: "", nonblock: false, nonblock_opacity: 0.2, history: true, width: "300px", min_height: "16px", type: "notice", icon: true, animation: "fade", animate_speed: "slow", opacity: 1, shadow: true, closer: true, closer_hover: true, sticker: true, sticker_hover: true, hide: true, delay: 8E3, mouse_reset: true, remove: true, insert_brs: true, stack: {
            dir1: "down",
            dir2: "left", push: "bottom", spacing1: 25, spacing2: 25
        }
    }
})(jQuery);
