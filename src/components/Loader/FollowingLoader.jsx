import React from "react"
import ContentLoader from "react-content-loader";
import Skeleton from "react-loading-skeleton";

const FollowingLoader = (props) => (
  <>
    {/* <ContentLoader
      speed={2}
      width={1100}
      height={700}
      viewBox="0 0 1100 700"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="31" y="130" rx="0" ry="0" width="0" height="9" />
      <rect x="8" y="18" rx="0" ry="0" width="26" height="17" />
      <rect x="39" y="22" rx="0" ry="0" width="76" height="8" />
      <rect x="8" y="45" rx="0" ry="0" width="1200" height="3" />
      <rect x="8" y="60" rx="0" ry="0" width="83" height="25" />
      <rect x="97" y="60" rx="0" ry="0" width="83" height="25" />
      <rect x="189" y="60" rx="0" ry="0" width="83" height="25" />
      <rect x="8" y="87" rx="0" ry="0" width="1200" height="3" />
      <rect x="8" y="104" rx="0" ry="0" width="106" height="17" />
      <rect x="8" y="134" rx="0" ry="0" width="1200" height="3" />
      <rect x="410" y="155" rx="5" ry="5" width="390" height="250" />
      <rect x="810" y="155" rx="5" ry="5" width="390" height="250" />
      <rect x="8" y="155" rx="5" ry="5" width="390" height="250" />
      <rect x="410" y="432" rx="5" ry="5" width="390" height="250" />
      <rect x="810" y="432" rx="5" ry="5" width="390" height="250" />
      <rect x="8" y="432" rx="5" ry="5" width="390" height="250" />
    </ContentLoader> */}

    <Skeleton width={150} height={17} />
    <div className="row">
      {[...Array(6)].map(() =>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <Skeleton height={250} />
        </div>
      )}
    </div>
  </>
)

export default FollowingLoader;