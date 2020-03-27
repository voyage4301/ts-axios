"use strict";
var deck = {
    suits: ['hearts', 'spandes', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: _this.suits[pickedSuit],
                card: pickedCard % 13
            };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log('card: ' + pickedCard.card + 'of' + pickedCard.suit);
var Handler = /** @class */ (function () {
    function Handler() {
        var _this = this;
        this.type = '';
        this.onClickBad = function (e) {
            _this.type = e.type;
        };
    }
    return Handler;
}());
var h = new Handler();
var uiElement = {
    addClickListener: function () {
    }
};
uiElement.addClickListener(h.onClickBad);
