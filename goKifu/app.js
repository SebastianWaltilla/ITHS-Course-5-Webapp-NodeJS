var goban = [
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"]
];

// kifu from gokifu.com
var kifu = "(;FF[4]GM[1]SZ[19]CA[UTF-8]SO[gokifu.com]BC[ja]WC[]EV[]PB[Ichiriki Ryo]BR[8p]PW[Xie Ke]WR[8p]KM[7.5]DT[2020-04-27]RE[W+R]TM[180]LT[]LC[5]GK[1];B[qd];W[pp];B[cd];W[cp];B[eq];W[dq];B[ep];W[cn];B[ip];W[oc];B[fc];W[pe];B[qe];W[pf];B[qg];W[nq];B[ld];W[fd];B[gd];W[ec];B[ed];W[fe];B[dc];W[gc];B[eb];W[fb];B[pg];W[ec];B[do];W[co];B[fc];W[gq];B[hc];W[ec];B[op];W[oq];B[fc];W[qf];B[rf];W[ec];B[qp];W[po];B[fc];W[re];B[rd];W[ec];B[qo];W[ee];B[fc];W[rg];B[se];W[ec];B[pn];W[dd];B[pq];W[oo];B[pr];W[on];B[om];W[nm];B[pm];W[mn];B[ng];W[go];B[db];W[ce];B[gb];W[fc];B[bd];W[qq];B[rq];W[bb];B[be];W[cf];B[bf];W[ch];B[cg];W[dg];B[bg];W[di];B[ib];W[ea];B[cc];W[hn];B[jn];W[mc];B[lc];W[md];B[dm];W[hl];B[fo];W[fn];B[fm];W[en];B[dn];W[bl];B[cl];W[bk];B[ck];W[cj];B[gm];W[gn];B[ej];W[gj];B[ei];W[eh];B[gi];W[hi];B[dj];W[fi];B[bj];W[ci];B[bm];W[bi];B[cm];W[dr];B[er];W[eo];B[dp];W[br];B[el];W[hm];B[fk];W[or];B[qr];W[kp];B[lo];W[ln];B[kq];W[lp];B[hr];W[gr];B[lq];W[mp];B[hp];W[gp];B[jr];W[mr];B[lr];W[ks];B[nl];W[jp];B[le];W[qb];B[rb];W[pd];B[qc];W[mf];B[ll];W[mg];B[km];W[id];B[ie];W[da];B[df];W[de];B[ca];W[fa];B[cb];W[je];B[jd];W[jc];B[kd];W[ic];B[hd];W[he];B[if];W[jb];B[hb];W[ia];B[ge];W[gf];B[hf];W[ga];B[gg];W[ff];B[kg];W[nh];B[eg];W[dh];B[ki];W[jo];B[og];W[lh];B[kh];W[nf];B[oi];W[ni];B[nj];W[oh];B[pi];W[ha];B[lb];W[mj];B[mi];W[nk];B[li];W[mh];B[oj];W[ph];B[qh];W[qi];B[qj];W[ri];B[rh];W[mb];B[pb];W[ob];B[mm];W[he];B[nn];W[no];B[ao];W[bp];B[ih];W[hg];B[hh];W[gh];B[ds];W[cs];B[es];W[gs];B[fg];W[kk];B[jk];W[jj];B[ij];W[jl];B[ik];W[ok];B[pj];W[kl];B[il];W[lm];B[kn];W[nm];B[ma];W[na];B[nn];W[dk];B[gl];W[nm];B[ap];W[aq];B[nn];W[gk];B[em];W[nm];B[cq];W[lk];B[ml];W[mk];B[nn];W[mo])";
// arrays to hold single moves in array, and playerdata in testKifuSplit[0]
var kifuSplit = kifu.split(";");
var kifuSplitMoves = [];

// Push every move into array "testKifuSplitMoves"
var i;
for (i = 2; i < kifuSplit.length; i++) {
    kifuSplitMoves.push(kifuSplit[i])
    };

// fill kifu with player moves
var t =  1
for (t; t < kifuSplitMoves.length; t++) {
    var player = kifuSplitMoves[t].charAt(0);
    var xpos = kifuSplitMoves[t].charAt(2).charCodeAt(0) - 97;
    var ypos = kifuSplitMoves[t].charAt(3).charCodeAt(0) - 97;
    goban[ypos].splice(xpos,1,player);
};


// debugg (prints goban as text)
var stopper = 0;
while (stopper != 19){
    console.log(goban[stopper]);
    stopper++;
}

function checkKo(){



}