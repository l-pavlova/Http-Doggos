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
import r from "../assets/doggos/doggo400.jpg"
import s from "../assets/doggos/doggo401.jpg"
import t from "../assets/doggos/doggo402.jpg"
import u from "../assets/doggos/doggo403.jpg"
import v from "../assets/doggos/doggo404.jpg"
import x from "../assets/doggos/doggo405.jpg"
import y from "../assets/doggos/doggo406.jpg"
import z from "../assets/doggos/doggo407.jpg"
import aa from "../assets/doggos/doggo408.jpg"
import ab from "../assets/doggos/doggo409.jpg"
import ac from "../assets/doggos/doggo410.jpg"
import ad from "../assets/doggos/doggo411.jpg"
import ae from "../assets/doggos/doggo412.jpg"
import af from "../assets/doggos/doggo413.jpg"
import ag from "../assets/doggos/doggo414.jpg"
import ah from "../assets/doggos/doggo415.jpg"
import ai from "../assets/doggos/doggo416.jpg"
import aj from "../assets/doggos/doggo417.jpg"
import ak from "../assets/doggos/doggo418.jpg"
import al from "../assets/doggos/doggo426.jpg"
import am from "../assets/doggos/doggo500.jpg"
import an from "../assets/doggos/doggo501.jpg"
import ao from "../assets/doggos/doggo502.jpg"
import ap from "../assets/doggos/doggo503.jpg"
import aq from "../assets/doggos/doggo504.jpg"
import ar from "../assets/doggos/doggo505.jpg"
import as from "../assets/doggos/doggo506.jpg"
import at from "../assets/doggos/doggo507.jpg"
import au from "../assets/doggos/doggo511.jpg"

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
    q,
    r,
    s,
    t,
    u,
    v,
    x,
    y,
    z,
    aa,
    ab,
    ac,
    ad,
    ae,
    af,
    ag,
    ah,
    ai,
    aj,
    al,
    ak,
    am,
    an,
    ao,
    ap,
    aq,
    ar,
    as,
    at,
    au,
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