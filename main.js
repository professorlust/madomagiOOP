'use strict';

/**
 * HTMLに文字を表示するすげーやつ
 * @param {string} str 表示したい文字列。
 */
const put = str => $('#list').append(`<li>${str}</li>`);

/** 魔法少女に共通した特徴一覧。 */
class Syojo {
    die() {
        put(`${this.constructor.name} は死んだ`);
    }
    get skill() {
        return '';
    }
    hunt(majo) {
        put(this.skill);
        majo.die();
    }
}

/** Mami ができること一覧。 */
class Mami extends Syojo {
    get skill() {
        return 'ティロフィナーレ(笑)';
    }
}

/** HomuHomu ができること一覧。 */
class HomuHomu extends Syojo {
    get skill() {
        return '時よ！(メガネクイッ)';
    }
}

/** Blossom ができること一覧。 */
class Blossom extends Syojo {
    get skill() {
        return 'おしりパンチ！';
    }
}

/** Sayaka ができること一覧。 */
class Sayaka extends Syojo {
    get skill() {
        return '瀟洒なソード投げ攻撃';
    }
}

/** Madoka ができること一覧。 */
class Madoka extends Syojo {
    get skill() {
        return 'かみのちから とくと めに やきつけておけ！！';
    }
}

/** 魔女ができること一覧。 */
class Majo {
    attack(syojo) {
        put('うーがおー！たべちゃうぞー！');
        syojo.die();
    }
    die() {
        put('魔女は死んだ');
    }
}

/** 準備ができたらここからはじまるよ */
$(() => {
    put('神は世界を創った');
    const mami = new Mami();
    const homu = new HomuHomu();
    const blossom = new Blossom();
    const majo = new Majo();
    mami.hunt(majo);
    homu.hunt(majo);
    blossom.hunt(majo);
    const sayaka = new Sayaka();
    const madoka = new Madoka();
    sayaka.hunt(majo);
    madoka.hunt(majo);
    majo.attack(mami);
});