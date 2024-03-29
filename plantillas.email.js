module.exports.correo_confirmacion = (
  datos = {
    correo: "",
    link_confirmacion: "",
    codigo: "",
    nombre: "",
    nombre_aplicacion: "",
  }
) => {
  return `

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style>
/* Add custom classes and styles that you want inlined here */
</style>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style type="text/css">.ExternalClass{width:100%}.ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div{line-height:150%}a{text-decoration:none}
</style><style type="text/css">@media screen and (max-width: 599px) {
.bte-grid--mobile {display:table !important
}
.bte-grid--desktop {display:none !important
}
.bte-spacing-container>tbody>tr>td.bte-space-left,.bte-spacing-container>tbody>tr>td.bte-space-right,.bte-spacing-container>tbody>tr>td.bte-space-top,.bte-spacing-container>tbody>tr>td.bte-space-bottom {font-size:0 !important;font-size:0 !important;font-size:0 !important;font-size:0 !important;font-size:0 !important;font-size:0 !important
}
.bte-spacing-container>tbody>tr>td.bte-space-left,.bte-spacing-container>tbody>tr>td.bte-space-right {width:0 !important;padding:0 !important;line-height:0;height:0;mso-line-height-rule:exactly;width:0 !important;padding:0 !important;line-height:0;height:0;mso-line-height-rule:exactly;width:0 !important;padding:0 !important;line-height:0;height:0;mso-line-height-rule:exactly;width:0 !important;padding:0 !important;line-height:0;height:0;mso-line-height-rule:exactly;width:0 !important;padding:0 !important;line-height:0;height:0;mso-line-height-rule:exactly;width:0 !important;padding:0 !important;line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container>tbody>tr>td.bte-space-top,.bte-spacing-container>tbody>tr>td.bte-space-bottom {padding:0 !important;line-height:0 !important;height:0 !important;mso-line-height-rule:exactly;padding:0 !important;line-height:0 !important;height:0 !important;mso-line-height-rule:exactly;padding:0 !important;line-height:0 !important;height:0 !important;mso-line-height-rule:exactly;padding:0 !important;line-height:0 !important;height:0 !important;mso-line-height-rule:exactly;padding:0 !important;line-height:0 !important;height:0 !important;mso-line-height-rule:exactly;padding:0 !important;line-height:0 !important;height:0 !important;mso-line-height-rule:exactly
}
.bte-spacing-container.s-lg-0>tbody>tr>td.bte-space-top,.bte-spacing-container.s-lg-0>tbody>tr>td.bte-space-bottom {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.s-lg-0>tbody>tr>td.bte-space-left,.bte-spacing-container.s-lg-0>tbody>tr>td.bte-space-right {width:0
}
.bte-spacing-container.sy-lg-0>tbody>tr>td.bte-space-top,.bte-spacing-container.st-lg-0>tbody>tr>td.bte-space-top {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.sy-lg-0>tbody>tr>td.bte-space-bottom,.bte-spacing-container.sb-lg-0>tbody>tr>td.bte-space-bottom {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.sx-lg-0>tbody>tr>td.bte-space-left,.bte-spacing-container.sl-lg-0>tbody>tr>td.bte-space-left {width:0
}
.bte-spacing-container.sx-lg-0>tbody>tr>td.bte-space-right,.bte-spacing-container.sr-lg-0>tbody>tr>td.bte-space-right {width:0
}
.bte-spacing-container.s-0>tbody>tr>td.bte-space-top,.bte-spacing-container.s-0>tbody>tr>td.bte-space-bottom {line-height:0 !important;height:0 !important;mso-line-height-rule:exactly
}
.bte-spacing-container.s-0>tbody>tr>td.bte-space-left,.bte-spacing-container.s-0>tbody>tr>td.bte-space-right {width:0 !important
}
.bte-spacing-container.sy-0>tbody>tr>td.bte-space-top,.bte-spacing-container.st-0>tbody>tr>td.bte-space-top {line-height:0 !important;height:0 !important;mso-line-height-rule:exactly
}
.bte-spacing-container.sy-0>tbody>tr>td.bte-space-bottom,.bte-spacing-container.sb-0>tbody>tr>td.bte-space-bottom {line-height:0 !important;height:0 !important;mso-line-height-rule:exactly
}
.bte-spacing-container.sx-0>tbody>tr>td.bte-space-left,.bte-spacing-container.sl-0>tbody>tr>td.bte-space-left {width:0 !important
}
.bte-spacing-container.sx-0>tbody>tr>td.bte-space-right,.bte-spacing-container.sr-0>tbody>tr>td.bte-space-right {width:0 !important
}
.bte-spacing-container.s-lg-1>tbody>tr>td.bte-space-top,.bte-spacing-container.s-lg-1>tbody>tr>td.bte-space-bottom {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.s-lg-1>tbody>tr>td.bte-space-left,.bte-spacing-container.s-lg-1>tbody>tr>td.bte-space-right {width:0
}
.bte-spacing-container.sy-lg-1>tbody>tr>td.bte-space-top,.bte-spacing-container.st-lg-1>tbody>tr>td.bte-space-top {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.sy-lg-1>tbody>tr>td.bte-space-bottom,.bte-spacing-container.sb-lg-1>tbody>tr>td.bte-space-bottom {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.sx-lg-1>tbody>tr>td.bte-space-left,.bte-spacing-container.sl-lg-1>tbody>tr>td.bte-space-left {width:0
}
.bte-spacing-container.sx-lg-1>tbody>tr>td.bte-space-right,.bte-spacing-container.sr-lg-1>tbody>tr>td.bte-space-right {width:0
}
.bte-spacing-container.s-1>tbody>tr>td.bte-space-top,.bte-spacing-container.s-1>tbody>tr>td.bte-space-bottom {line-height:4px !important;height:4px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.s-1>tbody>tr>td.bte-space-left,.bte-spacing-container.s-1>tbody>tr>td.bte-space-right {width:4px !important
}
.bte-spacing-container.sy-1>tbody>tr>td.bte-space-top,.bte-spacing-container.st-1>tbody>tr>td.bte-space-top {line-height:4px !important;height:4px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.sy-1>tbody>tr>td.bte-space-bottom,.bte-spacing-container.sb-1>tbody>tr>td.bte-space-bottom {line-height:4px !important;height:4px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.sx-1>tbody>tr>td.bte-space-left,.bte-spacing-container.sl-1>tbody>tr>td.bte-space-left {width:4px !important
}
.bte-spacing-container.sx-1>tbody>tr>td.bte-space-right,.bte-spacing-container.sr-1>tbody>tr>td.bte-space-right {width:4px !important
}
.bte-spacing-container.s-lg-2>tbody>tr>td.bte-space-top,.bte-spacing-container.s-lg-2>tbody>tr>td.bte-space-bottom {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.s-lg-2>tbody>tr>td.bte-space-left,.bte-spacing-container.s-lg-2>tbody>tr>td.bte-space-right {width:0
}
.bte-spacing-container.sy-lg-2>tbody>tr>td.bte-space-top,.bte-spacing-container.st-lg-2>tbody>tr>td.bte-space-top {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.sy-lg-2>tbody>tr>td.bte-space-bottom,.bte-spacing-container.sb-lg-2>tbody>tr>td.bte-space-bottom {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.sx-lg-2>tbody>tr>td.bte-space-left,.bte-spacing-container.sl-lg-2>tbody>tr>td.bte-space-left {width:0
}
.bte-spacing-container.sx-lg-2>tbody>tr>td.bte-space-right,.bte-spacing-container.sr-lg-2>tbody>tr>td.bte-space-right {width:0
}
.bte-spacing-container.s-2>tbody>tr>td.bte-space-top,.bte-spacing-container.s-2>tbody>tr>td.bte-space-bottom {line-height:8px !important;height:8px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.s-2>tbody>tr>td.bte-space-left,.bte-spacing-container.s-2>tbody>tr>td.bte-space-right {width:8px !important
}
.bte-spacing-container.sy-2>tbody>tr>td.bte-space-top,.bte-spacing-container.st-2>tbody>tr>td.bte-space-top {line-height:8px !important;height:8px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.sy-2>tbody>tr>td.bte-space-bottom,.bte-spacing-container.sb-2>tbody>tr>td.bte-space-bottom {line-height:8px !important;height:8px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.sx-2>tbody>tr>td.bte-space-left,.bte-spacing-container.sl-2>tbody>tr>td.bte-space-left {width:8px !important
}
.bte-spacing-container.sx-2>tbody>tr>td.bte-space-right,.bte-spacing-container.sr-2>tbody>tr>td.bte-space-right {width:8px !important
}
.bte-spacing-container.s-lg-3>tbody>tr>td.bte-space-top,.bte-spacing-container.s-lg-3>tbody>tr>td.bte-space-bottom {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.s-lg-3>tbody>tr>td.bte-space-left,.bte-spacing-container.s-lg-3>tbody>tr>td.bte-space-right {width:0
}
.bte-spacing-container.sy-lg-3>tbody>tr>td.bte-space-top,.bte-spacing-container.st-lg-3>tbody>tr>td.bte-space-top {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.sy-lg-3>tbody>tr>td.bte-space-bottom,.bte-spacing-container.sb-lg-3>tbody>tr>td.bte-space-bottom {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.sx-lg-3>tbody>tr>td.bte-space-left,.bte-spacing-container.sl-lg-3>tbody>tr>td.bte-space-left {width:0
}
.bte-spacing-container.sx-lg-3>tbody>tr>td.bte-space-right,.bte-spacing-container.sr-lg-3>tbody>tr>td.bte-space-right {width:0
}
.bte-spacing-container.s-3>tbody>tr>td.bte-space-top,.bte-spacing-container.s-3>tbody>tr>td.bte-space-bottom {line-height:16px !important;height:16px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.s-3>tbody>tr>td.bte-space-left,.bte-spacing-container.s-3>tbody>tr>td.bte-space-right {width:16px !important
}
.bte-spacing-container.sy-3>tbody>tr>td.bte-space-top,.bte-spacing-container.st-3>tbody>tr>td.bte-space-top {line-height:16px !important;height:16px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.sy-3>tbody>tr>td.bte-space-bottom,.bte-spacing-container.sb-3>tbody>tr>td.bte-space-bottom {line-height:16px !important;height:16px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.sx-3>tbody>tr>td.bte-space-left,.bte-spacing-container.sl-3>tbody>tr>td.bte-space-left {width:16px !important
}
.bte-spacing-container.sx-3>tbody>tr>td.bte-space-right,.bte-spacing-container.sr-3>tbody>tr>td.bte-space-right {width:16px !important
}
.bte-spacing-container.s-lg-4>tbody>tr>td.bte-space-top,.bte-spacing-container.s-lg-4>tbody>tr>td.bte-space-bottom {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.s-lg-4>tbody>tr>td.bte-space-left,.bte-spacing-container.s-lg-4>tbody>tr>td.bte-space-right {width:0
}
.bte-spacing-container.sy-lg-4>tbody>tr>td.bte-space-top,.bte-spacing-container.st-lg-4>tbody>tr>td.bte-space-top {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.sy-lg-4>tbody>tr>td.bte-space-bottom,.bte-spacing-container.sb-lg-4>tbody>tr>td.bte-space-bottom {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.sx-lg-4>tbody>tr>td.bte-space-left,.bte-spacing-container.sl-lg-4>tbody>tr>td.bte-space-left {width:0
}
.bte-spacing-container.sx-lg-4>tbody>tr>td.bte-space-right,.bte-spacing-container.sr-lg-4>tbody>tr>td.bte-space-right {width:0
}
.bte-spacing-container.s-4>tbody>tr>td.bte-space-top,.bte-spacing-container.s-4>tbody>tr>td.bte-space-bottom {line-height:24px !important;height:24px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.s-4>tbody>tr>td.bte-space-left,.bte-spacing-container.s-4>tbody>tr>td.bte-space-right {width:24px !important
}
.bte-spacing-container.sy-4>tbody>tr>td.bte-space-top,.bte-spacing-container.st-4>tbody>tr>td.bte-space-top {line-height:24px !important;height:24px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.sy-4>tbody>tr>td.bte-space-bottom,.bte-spacing-container.sb-4>tbody>tr>td.bte-space-bottom {line-height:24px !important;height:24px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.sx-4>tbody>tr>td.bte-space-left,.bte-spacing-container.sl-4>tbody>tr>td.bte-space-left {width:24px !important
}
.bte-spacing-container.sx-4>tbody>tr>td.bte-space-right,.bte-spacing-container.sr-4>tbody>tr>td.bte-space-right {width:24px !important
}
.bte-spacing-container.s-lg-5>tbody>tr>td.bte-space-top,.bte-spacing-container.s-lg-5>tbody>tr>td.bte-space-bottom {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.s-lg-5>tbody>tr>td.bte-space-left,.bte-spacing-container.s-lg-5>tbody>tr>td.bte-space-right {width:0
}
.bte-spacing-container.sy-lg-5>tbody>tr>td.bte-space-top,.bte-spacing-container.st-lg-5>tbody>tr>td.bte-space-top {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.sy-lg-5>tbody>tr>td.bte-space-bottom,.bte-spacing-container.sb-lg-5>tbody>tr>td.bte-space-bottom {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.sx-lg-5>tbody>tr>td.bte-space-left,.bte-spacing-container.sl-lg-5>tbody>tr>td.bte-space-left {width:0
}
.bte-spacing-container.sx-lg-5>tbody>tr>td.bte-space-right,.bte-spacing-container.sr-lg-5>tbody>tr>td.bte-space-right {width:0
}
.bte-spacing-container.s-5>tbody>tr>td.bte-space-top,.bte-spacing-container.s-5>tbody>tr>td.bte-space-bottom {line-height:48px !important;height:48px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.s-5>tbody>tr>td.bte-space-left,.bte-spacing-container.s-5>tbody>tr>td.bte-space-right {width:48px !important
}
.bte-spacing-container.sy-5>tbody>tr>td.bte-space-top,.bte-spacing-container.st-5>tbody>tr>td.bte-space-top {line-height:48px !important;height:48px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.sy-5>tbody>tr>td.bte-space-bottom,.bte-spacing-container.sb-5>tbody>tr>td.bte-space-bottom {line-height:48px !important;height:48px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.sx-5>tbody>tr>td.bte-space-left,.bte-spacing-container.sl-5>tbody>tr>td.bte-space-left {width:48px !important
}
.bte-spacing-container.sx-5>tbody>tr>td.bte-space-right,.bte-spacing-container.sr-5>tbody>tr>td.bte-space-right {width:48px !important
}
.d-mobile {display:block !important
}
.d-desktop {display:none !important
}
}
@media print {
.bte-grid--desktop {color:red
}
}
.btn>tbody>tr>td a:hover {color:inherit;text-decoration:none
}
.btn>tbody>tr>td:hover {color:#212529;text-decoration:none
}
.btn-primary>tbody>tr>td:hover {color:#fff;background-color:#0069d9;border-color:#0062cc
}
.btn-outline-primary>tbody>tr>td:hover {color:#fff;background-color:#007bff;border-color:#007bff
}
.btn-secondary>tbody>tr>td:hover {color:#fff;background-color:#727b84;border-color:#6c757d
}
.btn-outline-secondary>tbody>tr>td:hover {color:#fff;background-color:#868e96;border-color:#868e96
}
.btn-success>tbody>tr>td:hover {color:#fff;background-color:#218838;border-color:#1e7e34
}
.btn-outline-success>tbody>tr>td:hover {color:#fff;background-color:#28a745;border-color:#28a745
}
.btn-danger>tbody>tr>td:hover {color:#fff;background-color:#c82333;border-color:#bd2130
}
.btn-outline-danger>tbody>tr>td:hover {color:#fff;background-color:#dc3545;border-color:#dc3545
}
.btn-warning>tbody>tr>td:hover {color:#212529;background-color:#e0a800;border-color:#d39e00
}
.btn-outline-warning>tbody>tr>td:hover {color:#212529;background-color:#ffc107;border-color:#ffc107
}
.btn-info>tbody>tr>td:hover {color:#fff;background-color:#138496;border-color:#117a8b
}
.btn-outline-info>tbody>tr>td:hover {color:#fff;background-color:#17a2b8;border-color:#17a2b8
}
.btn-light>tbody>tr>td:hover {color:#212529;background-color:#e2e6ea;border-color:#dae0e5
}
.btn-outline-light>tbody>tr>td:hover {color:#212529;background-color:#f8f9fa;border-color:#f8f9fa
}
.btn-dark>tbody>tr>td:hover {color:#fff;background-color:#23272b;border-color:#1d2124
}
.btn-outline-dark>tbody>tr>td:hover {color:#fff;background-color:#343a40;border-color:#343a40
}
a.badge-primary:hover {color:#fff !important;background-color:#0062cc !important
}
a.badge-secondary:hover {color:#fff !important;background-color:#6c757d !important
}
a.badge-success:hover {color:#fff !important;background-color:#1e7e34 !important
}
a.badge-danger:hover {color:#fff !important;background-color:#bd2130 !important
}
a.badge-warning:hover {color:#212529 !important;background-color:#d39e00 !important
}
a.badge-info:hover {color:#fff !important;background-color:#117a8b !important
}
a.badge-light:hover {color:#212529 !important;background-color:#dae0e5 !important
}
a.badge-dark:hover {color:#fff !important;background-color:#1d2124 !important
}</style></head>
<body class="bg-light" style="margin: 0; Margin: 0; padding: 0; border: 0; outline: 0; width: 100%; min-width: 100%; height: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-family: Helvetica,Arial,sans-serif; line-height: 24px; font-weight: normal; font-size: 16px; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; background-color: #f8f9fa;"><!-- BODY TEMPLATE-->
<table valign="top" class="body" border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0px; border-collapse: collapse; margin: 0; Margin: 0; padding: 0; border: 0; outline: 0; width: 100%; min-width: 100%; height: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-family: Helvetica,Arial,sans-serif; line-height: 24px; font-weight: normal; font-size: 16px; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;" width="100%" height="100%">
<tbody>
<tr>
<td valign="top" style="line-height: 24px; font-size: 16px; margin: 0; border-spacing: 0px; border-collapse: collapse;">
<!-- BODY CONTENT -->


<!-- OUTER CONTAINER TEMPLATE -->
<table data-bte-added-class="container" class="container" border="0" cellpadding="0" cellspacing="0" style="font-family: Helvetica,Arial,sans-serif; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0px; border-collapse: collapse; width: 100%;" width="100%">
<tbody>
<tr>
<td align="center" style="line-height: 24px; font-size: 16px; margin: 0; border-spacing: 0px; border-collapse: collapse;">


<!--[if (gte mso 9)|(IE)]>
<table align="center" border="0" cellpadding="0" cellspacing="0">
<tbody>
<tr>
<td width="630">
<![endif]-->


<!-- OUTER CONTAINER CONTENT -->
<!-- INNER CONTAINER TEMPLATE -->
<table class="" data-bte-removed-class="container" border="0" cellpadding="0" cellspacing="0" style="font-family: Helvetica,Arial,sans-serif; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0px; border-collapse: collapse; width: 100%; max-width: 630px;" width="100%">
<tbody>
<tr>
<td align="left" class="bte-container-content" style="line-height: 24px; font-size: 16px; margin: 0; border-spacing: 0px; border-collapse: collapse; width: 100%; padding: 0 15px; text-align: left;" width="100%">
<!-- INNER CONTAINER CONTENT -->


<table class="bte-spacing-container bte-spacing-container--important sy-5 w-100" data-src="margin" data-bte-added-class="sy-5 w-100" border="0" cellpadding="0" cellspacing="0" style="font-family: Helvetica,Arial,sans-serif; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0px; border-collapse: collapse; table-layout: fixed; width: 100%;" width="100%">
<tbody>
<tr>
<td class="bte-space-top bte-space-left" style="margin: 0; border-spacing: 0px; border-collapse: collapse; width: 0; line-height: 48px; height: 48px; mso-line-height-rule: exactly; font-size: 0; padding: 0;" height="48">&nbsp;</td>
<td class="bte-space-top bte-space-content" style="margin: 0; border-spacing: 0px; border-collapse: collapse; line-height: 48px; height: 48px; mso-line-height-rule: exactly; font-size: 0; padding: 0;" height="48">&nbsp;</td>
<td class="bte-space-top bte-space-right" style="margin: 0; border-spacing: 0px; border-collapse: collapse; width: 0; line-height: 48px; height: 48px; mso-line-height-rule: exactly; font-size: 0; padding: 0;" height="48">&nbsp;</td>
</tr>
<tr>
<td class="bte-space-left" style="margin: 0; border-spacing: 0px; border-collapse: collapse; width: 0; line-height: 0; height: 0; mso-line-height-rule: exactly; font-size: 0; padding: 0;">&nbsp;</td>
<td class="bte-space-content" style="line-height: 24px; font-size: 16px; margin: 0; border-spacing: 0px; border-collapse: collapse;">
<table data-bte-added-class="card" class="card" border="0" cellpadding="0" cellspacing="0" style="font-family: Helvetica,Arial,sans-serif; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0px; background-color: #fff; border-radius: 4px; border: #adb5bd solid 1px; width: 100%; overflow: hidden; border-collapse: separate;" width="100%" bgcolor="#fff">
<tbody>
<tr>
<td style="line-height: 24px; font-size: 16px; margin: 0; border-spacing: 0px; border-collapse: collapse; width: 100%;" width="100%">

<table data-bte-added-class="card-body" class="card-body" border="0" cellpadding="0" cellspacing="0" style="font-family: Helvetica,Arial,sans-serif; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0px; border-collapse: collapse; width: 100%;" width="100%">
<tbody>
<tr>
<td style="line-height: 24px; font-size: 16px; margin: 0; border-spacing: 0px; border-collapse: collapse; padding: 12px 20px; width: 100%;" width="100%">
<div class="" data-bte-removed-class="card-body">
<h1 class="text-muted" style="margin-top: 0; margin-bottom: 0; font-weight: 400; text-align: left; vertical-align: baseline; font-size: 36px; line-height: 46.8px; color: #636c72;">${datos.nombre_aplicacion}</h1>
<h5 style="margin-top: 0; margin-bottom: 0; font-weight: 400; color: inherit; text-align: left; vertical-align: baseline; font-size: 20px; line-height: 26px;">¡Hola ${datos.nombre}!, tienes un registro de cuenta pendiente.</h5>
<br>

<p class="text-muted" style="line-height: 24px; font-size: 16px; margin: 0; width: 100%; color: #636c72;">
Tu correo <b>${datos.correo}</b> ha sido registrado en una cuenta de ${datos.nombre_aplicacion}. Para habilitarla por favor haz click en el siguiente
enlace.
</p>
<br>
<table data-bte-added-class="btn btn-primary" class="btn btn-primary" border="0" cellpadding="0" cellspacing="0" style="font-family: Helvetica,Arial,sans-serif; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0px; border-radius: 4px; border-collapse: separate;">
<tbody>
<tr>
<td style="margin: 0; border-spacing: 0px; border-collapse: collapse; display: inline-block; font-weight: 400; line-height: 1.5; text-align: center; vertical-align: middle; cursor: pointer; user-select: none; border: 1px solid transparent; padding: 6px 12px; font-size: 16px; border-radius: 4px; transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out; color: #fff; background-color: #007bff; border-color: #007bff; box-shadow: inset 0 1px 0 rgba(255,255,255,0.15),0 1px 1px rgba(0,0,0,0.075);" align="center" valign="middle" bgcolor="#007bff">
<a class="" href="${datos.link_confirmacion}?codigo=${datos.codigo}" data-bte-removed-class="btn btn-primary" style="background-color: transparent; text-decoration: none; color: #fff;">Habilitar cuenta</a>
</td>
</tr>
</tbody>
</table>

<br>
<!-- HR TEMPLATE -->
<table class="hr" border="0" cellpadding="0" cellspacing="0" style="font-family: Helvetica,Arial,sans-serif; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0px; border-collapse: collapse; width: 100%; border: 0;" width="100%">
<tbody>
<tr>
<td style="line-height: 24px; font-size: 16px; margin: 0; border-spacing: 0px; border-collapse: collapse; width: 100%; padding: 16px 0;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" style="font-family: Helvetica,Arial,sans-serif; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0px; border-collapse: collapse; width: 100%;" width="100%">
<tbody>
<tr>
<td style="margin: 0; border-spacing: 0px; border-collapse: collapse; border-top: 1px solid #adb5bd; height: 1px; width: 100%; font-size: 0; line-height: 0;" width="100%" height="1">&nbsp;</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!-- / HR TEMPLATE -->

<p class="text-muted" style="line-height: 24px; font-size: 16px; margin: 0; width: 100%; color: #636c72;">
Si el enlace no funciona, copia y pega el siguiente link en tu
navegador:
</p>
${datos.link_confirmacion}?codigo=${datos.codigo}
<br>
<br>
<p class="text-muted" style="line-height: 24px; font-size: 16px; margin: 0; width: 100%; color: #636c72;">
O copia y pega en tu inicio de sesión el siguiente código:
</p>

<h3 class="text-info w-100 text-center" style="margin-top: 0; margin-bottom: 0; font-weight: 400; vertical-align: baseline; font-size: 28px; line-height: 36.4px; color: #17a2b8; width: 100%; text-align: center;">${datos.codigo}</h3>

</div>
</td>
</tr>
</tbody>
</table>


</td>
</tr>
</tbody>
</table>

</td>
<td class="bte-space-right" style="margin: 0; border-spacing: 0px; border-collapse: collapse; width: 0; line-height: 0; height: 0; mso-line-height-rule: exactly; font-size: 0; padding: 0;">&nbsp;</td>
</tr>
<tr>
<td class="bte-space-bottom bte-space-left" style="margin: 0; border-spacing: 0px; border-collapse: collapse; width: 0; line-height: 48px; height: 48px; mso-line-height-rule: exactly; font-size: 0; padding: 0;" height="48">&nbsp;</td>
<td class="bte-space-bottom bte-space-content" style="margin: 0; border-spacing: 0px; border-collapse: collapse; line-height: 48px; height: 48px; mso-line-height-rule: exactly; font-size: 0; padding: 0;" height="48">&nbsp;</td>
<td class="bte-space-bottom bte-space-right" style="margin: 0; border-spacing: 0px; border-collapse: collapse; width: 0; line-height: 48px; height: 48px; mso-line-height-rule: exactly; font-size: 0; padding: 0;" height="48">&nbsp;</td>
</tr>
</tbody>
</table><!-- / INNER CONTAINER CONTENT -->
</td>
</tr>
</tbody>
</table>
<!-- / INNER CONTAINER TEMPLATE -->

<!-- / OUTER CONTAINER CONTENT -->


<!--[if (gte mso 9)|(IE)]>
</td>
</tr>
</tbody>
</table>
<![endif]-->


</td>
</tr>
</tbody>
</table>
<!-- / OUTER CONTAINER TEMPLATE -->
<!-- / BODY CONTENT -->
</td>
</tr>
</tbody>
</table>
<!-- / BODY TEMPLATE-->
</body></html>


`
}
module.exports.correo_recuperacion_password = (
  datos = {
    link_confirmacion: "",
    codigo: "",
    nombre: "",
    nombre_aplicacion: "",
  }
) => {
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html><head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style type="text/css">.ExternalClass{width:100%}.ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div{line-height:150%}a{text-decoration:none}
</style><style type="text/css">@media screen and (max-width: 599px) {
.bte-grid--mobile {display:table !important
}
.bte-grid--desktop {display:none !important
}
.bte-spacing-container>tbody>tr>td.bte-space-left,.bte-spacing-container>tbody>tr>td.bte-space-right,.bte-spacing-container>tbody>tr>td.bte-space-top,.bte-spacing-container>tbody>tr>td.bte-space-bottom {font-size:0 !important;font-size:0 !important;font-size:0 !important;font-size:0 !important;font-size:0 !important;font-size:0 !important
}
.bte-spacing-container>tbody>tr>td.bte-space-left,.bte-spacing-container>tbody>tr>td.bte-space-right {width:0 !important;padding:0 !important;line-height:0;height:0;mso-line-height-rule:exactly;width:0 !important;padding:0 !important;line-height:0;height:0;mso-line-height-rule:exactly;width:0 !important;padding:0 !important;line-height:0;height:0;mso-line-height-rule:exactly;width:0 !important;padding:0 !important;line-height:0;height:0;mso-line-height-rule:exactly;width:0 !important;padding:0 !important;line-height:0;height:0;mso-line-height-rule:exactly;width:0 !important;padding:0 !important;line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container>tbody>tr>td.bte-space-top,.bte-spacing-container>tbody>tr>td.bte-space-bottom {padding:0 !important;line-height:0 !important;height:0 !important;mso-line-height-rule:exactly;padding:0 !important;line-height:0 !important;height:0 !important;mso-line-height-rule:exactly;padding:0 !important;line-height:0 !important;height:0 !important;mso-line-height-rule:exactly;padding:0 !important;line-height:0 !important;height:0 !important;mso-line-height-rule:exactly;padding:0 !important;line-height:0 !important;height:0 !important;mso-line-height-rule:exactly;padding:0 !important;line-height:0 !important;height:0 !important;mso-line-height-rule:exactly
}
.bte-spacing-container.s-lg-0>tbody>tr>td.bte-space-top,.bte-spacing-container.s-lg-0>tbody>tr>td.bte-space-bottom {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.s-lg-0>tbody>tr>td.bte-space-left,.bte-spacing-container.s-lg-0>tbody>tr>td.bte-space-right {width:0
}
.bte-spacing-container.sy-lg-0>tbody>tr>td.bte-space-top,.bte-spacing-container.st-lg-0>tbody>tr>td.bte-space-top {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.sy-lg-0>tbody>tr>td.bte-space-bottom,.bte-spacing-container.sb-lg-0>tbody>tr>td.bte-space-bottom {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.sx-lg-0>tbody>tr>td.bte-space-left,.bte-spacing-container.sl-lg-0>tbody>tr>td.bte-space-left {width:0
}
.bte-spacing-container.sx-lg-0>tbody>tr>td.bte-space-right,.bte-spacing-container.sr-lg-0>tbody>tr>td.bte-space-right {width:0
}
.bte-spacing-container.s-0>tbody>tr>td.bte-space-top,.bte-spacing-container.s-0>tbody>tr>td.bte-space-bottom {line-height:0 !important;height:0 !important;mso-line-height-rule:exactly
}
.bte-spacing-container.s-0>tbody>tr>td.bte-space-left,.bte-spacing-container.s-0>tbody>tr>td.bte-space-right {width:0 !important
}
.bte-spacing-container.sy-0>tbody>tr>td.bte-space-top,.bte-spacing-container.st-0>tbody>tr>td.bte-space-top {line-height:0 !important;height:0 !important;mso-line-height-rule:exactly
}
.bte-spacing-container.sy-0>tbody>tr>td.bte-space-bottom,.bte-spacing-container.sb-0>tbody>tr>td.bte-space-bottom {line-height:0 !important;height:0 !important;mso-line-height-rule:exactly
}
.bte-spacing-container.sx-0>tbody>tr>td.bte-space-left,.bte-spacing-container.sl-0>tbody>tr>td.bte-space-left {width:0 !important
}
.bte-spacing-container.sx-0>tbody>tr>td.bte-space-right,.bte-spacing-container.sr-0>tbody>tr>td.bte-space-right {width:0 !important
}
.bte-spacing-container.s-lg-1>tbody>tr>td.bte-space-top,.bte-spacing-container.s-lg-1>tbody>tr>td.bte-space-bottom {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.s-lg-1>tbody>tr>td.bte-space-left,.bte-spacing-container.s-lg-1>tbody>tr>td.bte-space-right {width:0
}
.bte-spacing-container.sy-lg-1>tbody>tr>td.bte-space-top,.bte-spacing-container.st-lg-1>tbody>tr>td.bte-space-top {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.sy-lg-1>tbody>tr>td.bte-space-bottom,.bte-spacing-container.sb-lg-1>tbody>tr>td.bte-space-bottom {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.sx-lg-1>tbody>tr>td.bte-space-left,.bte-spacing-container.sl-lg-1>tbody>tr>td.bte-space-left {width:0
}
.bte-spacing-container.sx-lg-1>tbody>tr>td.bte-space-right,.bte-spacing-container.sr-lg-1>tbody>tr>td.bte-space-right {width:0
}
.bte-spacing-container.s-1>tbody>tr>td.bte-space-top,.bte-spacing-container.s-1>tbody>tr>td.bte-space-bottom {line-height:4px !important;height:4px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.s-1>tbody>tr>td.bte-space-left,.bte-spacing-container.s-1>tbody>tr>td.bte-space-right {width:4px !important
}
.bte-spacing-container.sy-1>tbody>tr>td.bte-space-top,.bte-spacing-container.st-1>tbody>tr>td.bte-space-top {line-height:4px !important;height:4px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.sy-1>tbody>tr>td.bte-space-bottom,.bte-spacing-container.sb-1>tbody>tr>td.bte-space-bottom {line-height:4px !important;height:4px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.sx-1>tbody>tr>td.bte-space-left,.bte-spacing-container.sl-1>tbody>tr>td.bte-space-left {width:4px !important
}
.bte-spacing-container.sx-1>tbody>tr>td.bte-space-right,.bte-spacing-container.sr-1>tbody>tr>td.bte-space-right {width:4px !important
}
.bte-spacing-container.s-lg-2>tbody>tr>td.bte-space-top,.bte-spacing-container.s-lg-2>tbody>tr>td.bte-space-bottom {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.s-lg-2>tbody>tr>td.bte-space-left,.bte-spacing-container.s-lg-2>tbody>tr>td.bte-space-right {width:0
}
.bte-spacing-container.sy-lg-2>tbody>tr>td.bte-space-top,.bte-spacing-container.st-lg-2>tbody>tr>td.bte-space-top {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.sy-lg-2>tbody>tr>td.bte-space-bottom,.bte-spacing-container.sb-lg-2>tbody>tr>td.bte-space-bottom {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.sx-lg-2>tbody>tr>td.bte-space-left,.bte-spacing-container.sl-lg-2>tbody>tr>td.bte-space-left {width:0
}
.bte-spacing-container.sx-lg-2>tbody>tr>td.bte-space-right,.bte-spacing-container.sr-lg-2>tbody>tr>td.bte-space-right {width:0
}
.bte-spacing-container.s-2>tbody>tr>td.bte-space-top,.bte-spacing-container.s-2>tbody>tr>td.bte-space-bottom {line-height:8px !important;height:8px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.s-2>tbody>tr>td.bte-space-left,.bte-spacing-container.s-2>tbody>tr>td.bte-space-right {width:8px !important
}
.bte-spacing-container.sy-2>tbody>tr>td.bte-space-top,.bte-spacing-container.st-2>tbody>tr>td.bte-space-top {line-height:8px !important;height:8px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.sy-2>tbody>tr>td.bte-space-bottom,.bte-spacing-container.sb-2>tbody>tr>td.bte-space-bottom {line-height:8px !important;height:8px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.sx-2>tbody>tr>td.bte-space-left,.bte-spacing-container.sl-2>tbody>tr>td.bte-space-left {width:8px !important
}
.bte-spacing-container.sx-2>tbody>tr>td.bte-space-right,.bte-spacing-container.sr-2>tbody>tr>td.bte-space-right {width:8px !important
}
.bte-spacing-container.s-lg-3>tbody>tr>td.bte-space-top,.bte-spacing-container.s-lg-3>tbody>tr>td.bte-space-bottom {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.s-lg-3>tbody>tr>td.bte-space-left,.bte-spacing-container.s-lg-3>tbody>tr>td.bte-space-right {width:0
}
.bte-spacing-container.sy-lg-3>tbody>tr>td.bte-space-top,.bte-spacing-container.st-lg-3>tbody>tr>td.bte-space-top {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.sy-lg-3>tbody>tr>td.bte-space-bottom,.bte-spacing-container.sb-lg-3>tbody>tr>td.bte-space-bottom {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.sx-lg-3>tbody>tr>td.bte-space-left,.bte-spacing-container.sl-lg-3>tbody>tr>td.bte-space-left {width:0
}
.bte-spacing-container.sx-lg-3>tbody>tr>td.bte-space-right,.bte-spacing-container.sr-lg-3>tbody>tr>td.bte-space-right {width:0
}
.bte-spacing-container.s-3>tbody>tr>td.bte-space-top,.bte-spacing-container.s-3>tbody>tr>td.bte-space-bottom {line-height:16px !important;height:16px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.s-3>tbody>tr>td.bte-space-left,.bte-spacing-container.s-3>tbody>tr>td.bte-space-right {width:16px !important
}
.bte-spacing-container.sy-3>tbody>tr>td.bte-space-top,.bte-spacing-container.st-3>tbody>tr>td.bte-space-top {line-height:16px !important;height:16px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.sy-3>tbody>tr>td.bte-space-bottom,.bte-spacing-container.sb-3>tbody>tr>td.bte-space-bottom {line-height:16px !important;height:16px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.sx-3>tbody>tr>td.bte-space-left,.bte-spacing-container.sl-3>tbody>tr>td.bte-space-left {width:16px !important
}
.bte-spacing-container.sx-3>tbody>tr>td.bte-space-right,.bte-spacing-container.sr-3>tbody>tr>td.bte-space-right {width:16px !important
}
.bte-spacing-container.s-lg-4>tbody>tr>td.bte-space-top,.bte-spacing-container.s-lg-4>tbody>tr>td.bte-space-bottom {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.s-lg-4>tbody>tr>td.bte-space-left,.bte-spacing-container.s-lg-4>tbody>tr>td.bte-space-right {width:0
}
.bte-spacing-container.sy-lg-4>tbody>tr>td.bte-space-top,.bte-spacing-container.st-lg-4>tbody>tr>td.bte-space-top {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.sy-lg-4>tbody>tr>td.bte-space-bottom,.bte-spacing-container.sb-lg-4>tbody>tr>td.bte-space-bottom {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.sx-lg-4>tbody>tr>td.bte-space-left,.bte-spacing-container.sl-lg-4>tbody>tr>td.bte-space-left {width:0
}
.bte-spacing-container.sx-lg-4>tbody>tr>td.bte-space-right,.bte-spacing-container.sr-lg-4>tbody>tr>td.bte-space-right {width:0
}
.bte-spacing-container.s-4>tbody>tr>td.bte-space-top,.bte-spacing-container.s-4>tbody>tr>td.bte-space-bottom {line-height:24px !important;height:24px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.s-4>tbody>tr>td.bte-space-left,.bte-spacing-container.s-4>tbody>tr>td.bte-space-right {width:24px !important
}
.bte-spacing-container.sy-4>tbody>tr>td.bte-space-top,.bte-spacing-container.st-4>tbody>tr>td.bte-space-top {line-height:24px !important;height:24px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.sy-4>tbody>tr>td.bte-space-bottom,.bte-spacing-container.sb-4>tbody>tr>td.bte-space-bottom {line-height:24px !important;height:24px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.sx-4>tbody>tr>td.bte-space-left,.bte-spacing-container.sl-4>tbody>tr>td.bte-space-left {width:24px !important
}
.bte-spacing-container.sx-4>tbody>tr>td.bte-space-right,.bte-spacing-container.sr-4>tbody>tr>td.bte-space-right {width:24px !important
}
.bte-spacing-container.s-lg-5>tbody>tr>td.bte-space-top,.bte-spacing-container.s-lg-5>tbody>tr>td.bte-space-bottom {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.s-lg-5>tbody>tr>td.bte-space-left,.bte-spacing-container.s-lg-5>tbody>tr>td.bte-space-right {width:0
}
.bte-spacing-container.sy-lg-5>tbody>tr>td.bte-space-top,.bte-spacing-container.st-lg-5>tbody>tr>td.bte-space-top {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.sy-lg-5>tbody>tr>td.bte-space-bottom,.bte-spacing-container.sb-lg-5>tbody>tr>td.bte-space-bottom {line-height:0;height:0;mso-line-height-rule:exactly
}
.bte-spacing-container.sx-lg-5>tbody>tr>td.bte-space-left,.bte-spacing-container.sl-lg-5>tbody>tr>td.bte-space-left {width:0
}
.bte-spacing-container.sx-lg-5>tbody>tr>td.bte-space-right,.bte-spacing-container.sr-lg-5>tbody>tr>td.bte-space-right {width:0
}
.bte-spacing-container.s-5>tbody>tr>td.bte-space-top,.bte-spacing-container.s-5>tbody>tr>td.bte-space-bottom {line-height:48px !important;height:48px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.s-5>tbody>tr>td.bte-space-left,.bte-spacing-container.s-5>tbody>tr>td.bte-space-right {width:48px !important
}
.bte-spacing-container.sy-5>tbody>tr>td.bte-space-top,.bte-spacing-container.st-5>tbody>tr>td.bte-space-top {line-height:48px !important;height:48px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.sy-5>tbody>tr>td.bte-space-bottom,.bte-spacing-container.sb-5>tbody>tr>td.bte-space-bottom {line-height:48px !important;height:48px !important;mso-line-height-rule:exactly
}
.bte-spacing-container.sx-5>tbody>tr>td.bte-space-left,.bte-spacing-container.sl-5>tbody>tr>td.bte-space-left {width:48px !important
}
.bte-spacing-container.sx-5>tbody>tr>td.bte-space-right,.bte-spacing-container.sr-5>tbody>tr>td.bte-space-right {width:48px !important
}
.d-mobile {display:block !important
}
.d-desktop {display:none !important
}
}
@media print {
.bte-grid--desktop {color:red
}
}
.btn>tbody>tr>td a:hover {color:inherit;text-decoration:none
}
.btn>tbody>tr>td:hover {color:#212529;text-decoration:none
}
.btn-primary>tbody>tr>td:hover {color:#fff;background-color:#0069d9;border-color:#0062cc
}
.btn-outline-primary>tbody>tr>td:hover {color:#fff;background-color:#007bff;border-color:#007bff
}
.btn-secondary>tbody>tr>td:hover {color:#fff;background-color:#727b84;border-color:#6c757d
}
.btn-outline-secondary>tbody>tr>td:hover {color:#fff;background-color:#868e96;border-color:#868e96
}
.btn-success>tbody>tr>td:hover {color:#fff;background-color:#218838;border-color:#1e7e34
}
.btn-outline-success>tbody>tr>td:hover {color:#fff;background-color:#28a745;border-color:#28a745
}
.btn-danger>tbody>tr>td:hover {color:#fff;background-color:#c82333;border-color:#bd2130
}
.btn-outline-danger>tbody>tr>td:hover {color:#fff;background-color:#dc3545;border-color:#dc3545
}
.btn-warning>tbody>tr>td:hover {color:#212529;background-color:#e0a800;border-color:#d39e00
}
.btn-outline-warning>tbody>tr>td:hover {color:#212529;background-color:#ffc107;border-color:#ffc107
}
.btn-info>tbody>tr>td:hover {color:#fff;background-color:#138496;border-color:#117a8b
}
.btn-outline-info>tbody>tr>td:hover {color:#fff;background-color:#17a2b8;border-color:#17a2b8
}
.btn-light>tbody>tr>td:hover {color:#212529;background-color:#e2e6ea;border-color:#dae0e5
}
.btn-outline-light>tbody>tr>td:hover {color:#212529;background-color:#f8f9fa;border-color:#f8f9fa
}
.btn-dark>tbody>tr>td:hover {color:#fff;background-color:#23272b;border-color:#1d2124
}
.btn-outline-dark>tbody>tr>td:hover {color:#fff;background-color:#343a40;border-color:#343a40
}
a.badge-primary:hover {color:#fff !important;background-color:#0062cc !important
}
a.badge-secondary:hover {color:#fff !important;background-color:#6c757d !important
}
a.badge-success:hover {color:#fff !important;background-color:#1e7e34 !important
}
a.badge-danger:hover {color:#fff !important;background-color:#bd2130 !important
}
a.badge-warning:hover {color:#212529 !important;background-color:#d39e00 !important
}
a.badge-info:hover {color:#fff !important;background-color:#117a8b !important
}
a.badge-light:hover {color:#212529 !important;background-color:#dae0e5 !important
}
a.badge-dark:hover {color:#fff !important;background-color:#1d2124 !important
}</style></head>
<body class="bg-light" style="margin: 0; Margin: 0; padding: 0; border: 0; outline: 0; width: 100%; min-width: 100%; height: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-family: Helvetica,Arial,sans-serif; line-height: 24px; font-weight: normal; font-size: 16px; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; background-color: #f8f9fa;"><!-- BODY TEMPLATE  -->
<table valign="top" class="body" border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0px; border-collapse: collapse; margin: 0; Margin: 0; padding: 0; border: 0; outline: 0; width: 100%; min-width: 100%; height: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-family: Helvetica,Arial,sans-serif; line-height: 24px; font-weight: normal; font-size: 16px; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;" width="100%" height="100%">
<tbody>
<tr>
  <td valign="top" style="line-height: 24px; font-size: 16px; margin: 0; border-spacing: 0px; border-collapse: collapse;">
    <!-- BODY CONTENT -->

    
  <!-- OUTER CONTAINER TEMPLATE -->
<table data-bte-added-class="container" class="container" border="0" cellpadding="0" cellspacing="0" style="font-family: Helvetica,Arial,sans-serif; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0px; border-collapse: collapse; width: 100%;" width="100%">
<tbody>
<tr>
  <td align="center" style="line-height: 24px; font-size: 16px; margin: 0; border-spacing: 0px; border-collapse: collapse;">

    
      <!--[if (gte mso 9)|(IE)]>
      <table align="center" border="0" cellpadding="0" cellspacing="0">
        <tbody>
        <tr>
          <td width="630">
      <![endif]-->
    

    <!-- OUTER CONTAINER CONTENT -->
    <!-- INNER CONTAINER TEMPLATE -->
<table class="" data-bte-removed-class="container" border="0" cellpadding="0" cellspacing="0" style="font-family: Helvetica,Arial,sans-serif; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0px; border-collapse: collapse; width: 100%; max-width: 630px;" width="100%">
  <tbody>
  <tr>
      <td align="left" class="bte-container-content" style="line-height: 24px; font-size: 16px; margin: 0; border-spacing: 0px; border-collapse: collapse; width: 100%; padding: 0 15px; text-align: left;" width="100%">
          <!-- INNER CONTAINER CONTENT -->

          
    <table class="bte-spacing-container bte-spacing-container--important sy-5 w-100" data-src="margin" data-bte-added-class="sy-5 w-100" border="0" cellpadding="0" cellspacing="0" style="font-family: Helvetica,Arial,sans-serif; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0px; border-collapse: collapse; table-layout: fixed; width: 100%;" width="100%">
<tbody>
<tr>
  <td class="bte-space-top bte-space-left" style="margin: 0; border-spacing: 0px; border-collapse: collapse; width: 0; line-height: 48px; height: 48px; mso-line-height-rule: exactly; font-size: 0; padding: 0;" height="48">&nbsp;</td>
  <td class="bte-space-top bte-space-content" style="margin: 0; border-spacing: 0px; border-collapse: collapse; line-height: 48px; height: 48px; mso-line-height-rule: exactly; font-size: 0; padding: 0;" height="48">&nbsp;</td>
  <td class="bte-space-top bte-space-right" style="margin: 0; border-spacing: 0px; border-collapse: collapse; width: 0; line-height: 48px; height: 48px; mso-line-height-rule: exactly; font-size: 0; padding: 0;" height="48">&nbsp;</td>
</tr>
<tr>
  <td class="bte-space-left" style="margin: 0; border-spacing: 0px; border-collapse: collapse; width: 0; line-height: 0; height: 0; mso-line-height-rule: exactly; font-size: 0; padding: 0;">&nbsp;</td>
  <td class="bte-space-content" style="line-height: 24px; font-size: 16px; margin: 0; border-spacing: 0px; border-collapse: collapse;">
    <table data-bte-added-class="card" class="card" border="0" cellpadding="0" cellspacing="0" style="font-family: Helvetica,Arial,sans-serif; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0px; background-color: #fff; border-radius: 4px; border: #adb5bd solid 1px; width: 100%; overflow: hidden; border-collapse: separate;" width="100%" bgcolor="#fff">
<tbody>
<tr>
  <td style="line-height: 24px; font-size: 16px; margin: 0; border-spacing: 0px; border-collapse: collapse; width: 100%;" width="100%">
    
      <table data-bte-added-class="card-body" class="card-body" border="0" cellpadding="0" cellspacing="0" style="font-family: Helvetica,Arial,sans-serif; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-spacing: 0px; border-collapse: collapse; width: 100%;" width="100%">
<tbody>
<tr>
  <td style="line-height: 24px; font-size: 16px; margin: 0; border-spacing: 0px; border-collapse: collapse; padding: 12px 20px; width: 100%;" width="100%">
    <div class="" data-bte-removed-class="card-body">
        <h1 class="text-muted" style="margin-top: 0; margin-bottom: 0; font-weight: 400; text-align: left; vertical-align: baseline; font-size: 36px; line-height: 46.8px; color: #636c72;">CODICE SECURITY</h1>
        <h5 style="margin-top: 0; margin-bottom: 0; font-weight: 400; color: inherit; text-align: left; vertical-align: baseline; font-size: 20px; line-height: 26px;">
          ¡Hola ${datos.nombre}!, hemos recibido una solicitud para restaurar
          tu contraseña en ${datos.nombre_aplicacion}
        </h5>
        <br>
        ${datos.link_confirmacion}?codigo=${datos.codigo}
        <br>
        <p class="text-muted" style="line-height: 24px; font-size: 16px; margin: 0; width: 100%; color: #636c72;">
          Si el link no funciona, copia y pega el link en tu
          navegador:
        </p>
      </div>
  </td>
</tr>
</tbody>
</table>

    
  </td>
</tr>
</tbody>
</table>

  </td>
  <td class="bte-space-right" style="margin: 0; border-spacing: 0px; border-collapse: collapse; width: 0; line-height: 0; height: 0; mso-line-height-rule: exactly; font-size: 0; padding: 0;">&nbsp;</td>
</tr>
<tr>
  <td class="bte-space-bottom bte-space-left" style="margin: 0; border-spacing: 0px; border-collapse: collapse; width: 0; line-height: 48px; height: 48px; mso-line-height-rule: exactly; font-size: 0; padding: 0;" height="48">&nbsp;</td>
  <td class="bte-space-bottom bte-space-content" style="margin: 0; border-spacing: 0px; border-collapse: collapse; line-height: 48px; height: 48px; mso-line-height-rule: exactly; font-size: 0; padding: 0;" height="48">&nbsp;</td>
  <td class="bte-space-bottom bte-space-right" style="margin: 0; border-spacing: 0px; border-collapse: collapse; width: 0; line-height: 48px; height: 48px; mso-line-height-rule: exactly; font-size: 0; padding: 0;" height="48">&nbsp;</td>
</tr>
</tbody>
</table>

  

          <!-- / INNER CONTAINER CONTENT -->
      </td>
  </tr>
  </tbody>
</table>
<!-- / INNER CONTAINER TEMPLATE -->

    <!-- / OUTER CONTAINER CONTENT -->

    
      <!--[if (gte mso 9)|(IE)]>
      </td>
      </tr>
      </tbody>
      </table>
      <![endif]-->
    

  </td>
</tr>
</tbody>
</table>
<!-- / OUTER CONTAINER TEMPLATE -->





    <!-- / BODY CONTENT -->
  </td>
</tr>
</tbody>
</table>
<!-- / BODY TEMPLATE  -->
</body></html>
  `
}
