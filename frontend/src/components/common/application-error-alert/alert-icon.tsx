/*
 * SPDX-FileCopyrightText: 2023 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import React from 'react'

export interface AlertIconProps {
  className?: string
}

/**
 * Renders the icon used in the {@link ApplicationAlert}.
 *
 * @param className The class name attribute that should be added to the SVG
 */
export const AlertIcon: React.FC<AlertIconProps> = ({ className }) => {
  return (
    <svg
      width='64'
      height='48'
      version='1.1'
      viewBox='0 0 64 48'
      xmlns='http://www.w3.org/2000/svg'
      className={className}>
      <path
        d='m24.215 0.026861c-0.13384-0.035836-0.27475-0.035815-0.40857 6.25e-5v6.25e-5c-0.13382 0.035865-0.25585 0.10632-0.35382 0.20429l-1.9063 1.9065-2.2828-1.4343c-0.36911-0.23185-0.85628-0.12064-1.0882 0.24842l-1.4343 2.2826-2.5447-0.89058c-0.41146-0.14395-0.86171 0.072883-1.0057 0.48432l-0.89033 2.5447-2.6793-0.30189c-0.43316-0.04877-0.82386 0.2628-0.87271 0.69595l-0.30183 2.679-2.679 0.30183c-0.43315 0.048845-0.74472 0.43955-0.69595 0.87271l0.30195 2.679-2.5452 0.89058c-0.41144 0.144-0.62827 0.59425-0.48432 1.0057l0.89046 2.5446-2.2828 1.4343c-0.36904 0.23195-0.48022 0.71912-0.24836 1.0882l1.4345 2.2832-1.9067 1.9065c-0.30823 0.30824-0.30826 0.80797-6.25e-5 1.1162l1.9066 1.9068-1.4343 2.283c-0.23185 0.36911-0.12064 0.85628 0.24842 1.0882l2.2827 1.4342-0.89046 2.5447c-0.14395 0.41146 0.072882 0.86171 0.48432 1.0057l2.545 0.89052-0.30183 2.6787c-0.048733 0.43314 0.26283 0.8238 0.69595 0.87264l2.679 0.30201 0.30183 2.679c0.048814 0.43315 0.43948 0.74475 0.87265 0.69602l2.6793-0.30177 0.89033 2.5444c0.144 0.41138 0.59416 0.62819 1.0056 0.48432l2.5447-0.89002 1.4345 2.2828c0.23195 0.36908 0.71917 0.48027 1.0883 0.24836l2.2851-1.4361 1.9065 1.8888c0.30764 0.30469 0.8033 0.30469 1.1109 0l1.9067-1.8884 2.2853 1.4359c0.36914 0.23188 0.85636 0.12064 1.0883-0.24848l1.4343-2.283 2.545 0.89058c0.41148 0.14394 0.86174-0.07292 1.0057-0.48439l0.89027-2.5447 2.6793 0.30176c0.43318 0.04877 0.8239-0.26284 0.87271-0.69602l0.3017-2.6793 2.6793-0.3017c0.43321-0.04881 0.74482-0.43956 0.69602-0.87277l-0.30201-2.679 2.545-0.89052c0.41144-0.144 0.62827-0.59425 0.48432-1.0057l-0.89058-2.545 2.2827-1.4343c0.3691-0.23194 0.48031-0.71915 0.24842-1.0883l-1.4343-2.2826 1.9066-1.9068c0.30821-0.30826 0.30821-0.80799 0-1.1162l-1.9065-1.9064 1.4342-2.2826c0.23185-0.36911 0.12064-0.85628-0.24842-1.0882l-2.2827-1.4344 0.89058-2.5449c0.14394-0.41148-0.07292-0.86174-0.48439-1.0057l-2.5447-0.89033 0.30177-2.6792c0.048732-0.43316-0.26286-0.82383-0.69602-0.87265l-2.679-0.30183-0.30201-2.6793c-0.048845-0.43315-0.43954-0.74472-0.87271-0.69595l-2.679 0.30176-0.89052-2.5449c-0.144-0.41144-0.59425-0.62827-1.0057-0.48432l-2.5445 0.89046-1.4348-2.2828c-0.23197-0.36902-0.71914-0.48017-1.0882-0.2483l-2.2829 1.4344-1.9063-1.9064c-0.097986-0.097977-0.22004-0.16843-0.35388-0.20429zm-0.20429 1.8788 1.7933 1.7933c0.26041 0.26036 0.66625 0.30608 0.97806 0.11017l2.1477-1.3495 1.3498 2.1476c0.19597 0.31172 0.58142 0.44654 0.92896 0.32495l2.3936-0.83761 0.83774 2.394c0.12164 0.34755 0.46742 0.56482 0.83333 0.52364l2.5202-0.28388 0.28413 2.5204c0.04126 0.36592 0.33004 0.6547 0.69595 0.69595l2.5201 0.28388-0.28388 2.5204c-0.04118 0.36593 0.17613 0.71171 0.5237 0.83333l2.3938 0.83749-0.8378 2.394c-0.12159 0.34758 0.01329 0.73306 0.32507 0.92899l2.1474 1.3494-1.3492 2.1473c-0.19591 0.31181-0.15019 0.71764 0.11017 0.97806l1.7935 1.7934-1.7935 1.7937c-0.26035 0.26039-0.30609 0.66619-0.11023 0.97799l1.3492 2.1473-2.1474 1.3492c-0.31179 0.19594-0.44668 0.58143-0.32507 0.92902l0.8378 2.3941-2.3942 0.8378c-0.34757 0.12165-0.56485 0.46746-0.52364 0.8334l0.28406 2.52-2.5203 0.28388c-0.36596 0.04124-0.65478 0.33005-0.69602 0.69602l-0.28388 2.5204-2.5204-0.28388c-0.36593-0.04118-0.71171 0.17613-0.83333 0.5237l-0.83749 2.3938-2.3941-0.8378c-0.3476-0.1216-0.7331 0.01332-0.92902 0.32513l-1.3493 2.1476-2.0064-1.2607 10.314-10.32c1.6525-1.5554 2.8829-3.7501 2.8829-6.2533 0-4.5451-3.6845-8.2296-8.2296-8.2296-2.2575 0-4.3026 0.90977-5.7892 2.3821l-9.75e-4 -1e-3 -2.0969 2.0969-1.7144-1.7144c-1.5084-1.7209-3.721-2.8088-6.1889-2.8088-4.5451 0-8.2296 3.6848-8.2296 8.2296 0 2.375 1.0073 4.5135 2.6164 6.0155l10.61 10.604-2.004 1.2594-1.3493-2.1473c-0.19593-0.31175-0.58137-0.44663-0.92893-0.32507l-2.3938 0.83724-0.83755-2.3936c-0.12163-0.34756-0.46741-0.56486-0.83333-0.52368l-2.5204 0.28388-0.28394-2.5202c-0.041224-0.36592-0.32998-0.65473-0.69589-0.69602l-2.5202-0.28406 0.28394-2.5198c0.041215-0.36593-0.17607-0.71174-0.52364-0.8334l-2.3942-0.8378 0.83761-2.3938c0.12161-0.34759-0.013278-0.73308-0.32507-0.92902l-2.1474-1.3492 1.3493-2.1476c0.19586-0.31181 0.15012-0.71761-0.11023-0.97799l-1.7935-1.7937 1.7937-1.7936c0.26038-0.2604 0.30612-0.66624 0.11023-0.97806l-1.3496-2.1479 2.1474-1.3492c0.31181-0.19594 0.4467-0.58146 0.32507-0.92905l-0.83761-2.3937 2.3943-0.8378c0.34757-0.12165 0.56485-0.46746 0.52364-0.8334l-0.28406-2.5202 2.5202-0.28394c0.36592-0.041256 0.6547-0.33004 0.69595-0.69595l0.28388-2.5202 2.5204 0.284c0.36595 0.041207 0.71177-0.1761 0.8334-0.5237l0.83755-2.3937 2.3939 0.83768c0.34756 0.1216 0.73304-0.013253 0.92899-0.32501l1.3493-2.1473 2.1475 1.3493c0.31183 0.19587 0.71767 0.15011 0.97806-0.11029zm29.563 3.0788 1.3061 26.799h2.9777l1.306-26.799zm-34.116 23.865c0.9939 0 1.7991 0.80533 1.7991 1.7991 0 0.99377-0.80521 1.799-1.7991 1.799-0.99337 0-1.7988-0.80527-1.7988-1.799 0-0.99377 0.8054-1.7991 1.7988-1.7991zm9.1233 0c0.99377 0 1.7991 0.80533 1.7991 1.7991 0 0.99377-0.80536 1.799-1.7991 1.799-0.99346 0-1.799-0.80527-1.799-1.799 0-0.99377 0.80552-1.7991 1.799-1.7991zm-8.4399 1.0306c-0.27526 0-0.49867 0.22342-0.49867 0.49873 0 0.27563 0.22342 0.49814 0.49867 0.49814 0.27513 0 0.49848-0.22249 0.49848-0.49814 0-0.27531-0.22336-0.49873-0.49848-0.49873zm9.1233 0c-0.27532 0-0.49873 0.22342-0.49873 0.49873 0 0.27563 0.22341 0.49814 0.49873 0.49814 0.27501 0 0.49848-0.22249 0.49848-0.49814 0-0.27531-0.22348-0.49873-0.49848-0.49873zm27.078 6.083c-0.90549 0-1.6717 0.26119-2.2986 0.78358-0.62689 0.52239-0.94034 1.4279-0.94034 2.7165 0 1.2538 0.31344 2.1593 0.94034 2.7165 0.62689 0.55723 1.3931 0.83583 2.2986 0.83583 0.87068 0 1.6194-0.27861 2.2463-0.83583 0.6617-0.55723 0.99259-1.4627 0.99259-2.7165 0-1.2886-0.33085-2.1941-0.99259-2.7165-0.62689-0.52239-1.3757-0.78358-2.2463-0.78358zm-32.335 7.9377c0.0012 0 0.0023 3.13e-4 0.0034 3.13e-4 0.91765 9.37e-4 1.7489 0.37435 2.3506 0.9783-0.0096 1.29-1.0574 2.3332-2.3494 2.3358-0.0016 3e-6 -0.0031 5e-4 -0.0047 5e-4 -1.2943 0-2.3443-1.0444-2.3539-2.3363 0.60261-0.6047 1.4348-0.97846 2.3541-0.97846z'
        fill='currentColor'
      />
    </svg>
  )
}
