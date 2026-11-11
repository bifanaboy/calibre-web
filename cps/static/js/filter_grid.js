/* This file is part of the Calibre-Web (https://github.com/janeczku/calibre-web)
 *    Copyright (C) 2018 OzzieIsaacs
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

var direction = $("#asc").data('order');  // 0=Descending order; 1= ascending order

var $list = $("#list");

function sortGrid(ascending) {
    $($list.children(".book").get().sort(function(a, b) {
        var left = $(a).find(".title").text();
        var right = $(b).find(".title").text();
        return left.localeCompare(right) * (ascending ? 1 : -1);
    })).appendTo($list);
}

$("#desc").click(function() {
    if (direction === 0) {
        return;
    }
    $("#asc").removeClass("active");
    $("#desc").addClass("active");

    var page = $(this).data("id");
    $.ajax({
        method:"post",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: getPath() + "/ajax/view",
        data: "{\"" + page + "\": {\"dir\": \"desc\"}}",
    });
    sortGrid(false);
    direction = 0;
});

$("#asc").click(function() {
    if (direction === 1) {
        return;
    }
    $("#desc").removeClass("active");
    $("#asc").addClass("active");

    var page = $(this).data("id");
    $.ajax({
        method:"post",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: getPath() + "/ajax/view",
        data: "{\"" + page + "\": {\"dir\": \"asc\"}}",
    });
    sortGrid(true);
    direction = 1;
});

$("#all").click(function() {
    $(".char").removeClass("active");
    $("#all").addClass("active");
    // go through all elements and make them visible
    $list.children(".book").show();
});

$(".char").click(function() {
    $(".char").removeClass("active");
    $(this).addClass("active");
    $("#all").removeClass("active");
    var character = $(this).text();
    $list.children(".book").each(function() {
        var name = $(this).attr("data-id") || "";
        $(this).toggle(name.charAt(0).toUpperCase() === character);
    });
});
