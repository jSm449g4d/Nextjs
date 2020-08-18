import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';



export default () => (
    <div>
        <Head>
            <title>APP_TSX</title>
        </Head>
        <div>Welcome to next.js!</div>
        <Link href="/fetch">
            <AppM />
        </Link>



    </div>
);

export const AppM = () => {
    const [tmpText, setTmpText] = useState("")
    const [tmpSwitch, setTmpSwitch] = useState("")

    return (
        <div className="m-1 d-flex flex-column text-center" style={{ backgroundColor: "beige", border: "3px double silver" }}>
            <h4>商品詳細: {tmpText}</h4>
            <textarea className="form-control m-1" rows={5} value={tmpText}
                onChange={(evt: any) => { setTmpText(evt.target.value) }}></textarea>
            <div className="d-flex">
                <button className="flex-fill btn btn-success btn-lg m-1" type="button"
                    onClick={() => { }}>
                    <i className="fas fa-paper-plane mr-1" style={{ pointerEvents: "none" }}></i>変更する
                </button>
                <button className="flex-fill btn btn-secondary btn-lg m-1" type="button"
                    onClick={() => { setTmpText(""); setTmpSwitch(""); }}>
                    <i className="fas fa-times mr-1" style={{ pointerEvents: "none" }}></i>変更中止
                </button>
            </div>
        </div>
    );
}
