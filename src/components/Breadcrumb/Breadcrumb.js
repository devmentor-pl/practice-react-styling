import React from "react";
import StyledBreadcrumb from "./Breadcrumb.styled";
import BreadcrumbItem from "./BreadcrumbItem";

const Breadcrumb = (props) => {
    const breadcrumbs = [
        { href: "#", label: "Home", active: false },
        {
            href: "https://getbootstrap.com/docs/4.0/components/breadcrumb/",
            label: "Library",
            active: false,
        },
        { href: null, label: "Data", active: true },
    ];
    return (
        <StyledBreadcrumb>
            {breadcrumbs.map((crumb, index) => {
                return (
                    <>
                        <BreadcrumbItem
                            key={index}
                            href={crumb.href}
                            label={crumb.label}
                            active={crumb.active}
                        />
                        {index < breadcrumbs.length - 1 && (
                            <span style={{ color: "gray" }}>/</span>
                        )}
                    </>
                );
            })}
        </StyledBreadcrumb>
    );
};

export default Breadcrumb;
