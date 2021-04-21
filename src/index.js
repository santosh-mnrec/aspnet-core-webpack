import _ from 'lodash';
import $ from 'jquery';

function createChild() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    return element;
}

$('button.details').on('click', function () {
    $.getJSON(`/home/index?id=${$(this).data('id')}`).done(function (product) {
        $('#product').text(product.productName);
        $('#category').text(product.category.categoryName);
        $('#quantity').text(product.quantityPerUnit);
        $('#price').text(product.unitPrice);
        $('#instock').text(product.unitsInStock);
        $('#onorder').text(product.unitsOnOrder);
        $('#discontinued').text(product.discontinued);
        $('#discontinued-date').text(product.discontinuedDate);
        $('#supplier').text(product.supplier.companyName);
    });
});
document.body.appendChild(createChild());