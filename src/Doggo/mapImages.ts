import a from "../assets/doggos/doggo100.png"
import b from "../assets/doggos/doggo101.jpg"
import c from "../assets/doggos/doggo102.jpeg"
import d from "../assets/doggos/doggo200.jpg"
import e from "../assets/doggos/doggo201.jpg"
import f from "../assets/doggos/doggo202.png"
import g from "../assets/doggos/doggo203.jpg"
import h from "../assets/doggos/doggo204.jpg"
import i from "../assets/doggos/doggo205.jpg"
import j from "../assets/doggos/doggo206.png"
import k from "../assets/doggos/doggo207.jpg"
import l from "../assets/doggos/doggo300.jpg"
import m from "../assets/doggos/doggo301.jpg"
import n from "../assets/doggos/doggo302.jpg"
import o from "../assets/doggos/doggo303.jpg"
import p from "../assets/doggos/doggo304.jpg"
import q from "../assets/doggos/doggo307.jpg"
import r from "../assets/doggos/doggo307.jpg"

const images = {
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q
}

function getImages() {
    const imgs = [];
    const vals = Object.values(images);
    console.log(vals);

    for (let val of vals) {
        imgs.push(val);
    }
    return imgs;
}

export default getImages;