import React from 'react'

export default function Alert({ alert }) {
    return (
        alert && <div className="toast align-items-center text-bg-success border-0 show" role="alert" aria-live="assertive" aria-atomic="true" style={{ position: 'fixed', width: 280, top: 70, right: 10 }}>
            <div className="d-flex">
                <div className="toast-body">
                    <b>
                        {alert.typ} : {alert.msg}
                    </b>
                </div>
            </div>
        </div>
    )
}
