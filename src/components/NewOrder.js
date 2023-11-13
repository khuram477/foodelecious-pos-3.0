import React from "react";

function NewOrder({ commodity, setCommodityList }) {
  const [showRemoveItem, setShowRemoveItem] = React.useState(false);
  return (
    <div className="pos-order">
      <div className="pos-order-product">
        <div className="flex-1">
          <div className="h6 mb-1">{commodity.name}</div>
          {/* <div className="small">£ {commodity.productPrice}</div> */}
          <div className="small mb-2">
            {commodity.options?.map((opt) => {
              if (opt.type == "no") return null;
              return (
                <div>
                  {opt.stepName}: {opt.type} - £{opt.price}
                </div>
              );
            })}
          </div>
          <div className="d-flex">
            <a href="#/" className="btn btn-outline-theme btn-sm">
              <i className="fa fa-minus" />
            </a>
            <input
              type="text"
              className="form-control w-50px form-control-sm mx-2 bg-white bg-opacity-25 bg-white bg-opacity-25 text-center"
              readOnly=""
              defaultValue={1}
            />
            <a href="#/" className="btn btn-outline-theme btn-sm">
              <i className="fa fa-plus" />
            </a>
          </div>
        </div>
      </div>
      <div className="pos-order-price d-flex flex-column">
        <div style={{ fontWeight: "bold" }}>£{commodity.productPrice}</div>
        <div className="mt-auto d-flex flex-column gap-2">
          <button className="btn btn-sm btn-outline-gray-500">
            <i className="fa fa-pencil" />
          </button>
          <button
            className="btn btn-sm btn-outline-gray-500"
            onClick={() => setShowRemoveItem(true)}
          >
            <i className="fa fa-trash" />
          </button>
        </div>
      </div>
      {showRemoveItem ? (
        <div className="pos-order-confirmation text-center d-flex flex-column justify-content-center">
          <div className="mb-1">
            <i className="bi bi-trash fs-36px lh-1" />
          </div>
          <div className="mb-2">Remove this item?</div>
          <div>
            <button
              onClick={() => setShowRemoveItem(false)}
              className="btn btn-outline-white btn-sm ms-auto me-2 width-100px"
            >
              No
            </button>
            <button
              onClick={() => {
                setShowRemoveItem(false);
                setCommodityList((comm) =>
                  comm.filter((el) => el.name !== commodity.name)
                );
              }}
              className="btn btn-outline-theme btn-sm width-100px"
            >
              Yes
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default NewOrder;