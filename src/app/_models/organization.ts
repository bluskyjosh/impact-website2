import {OrganizationIpRule} from "./organization.ip.rule";

export class Organization {
    id:number;
    name:string;
    url:string;
    email_domain:string;
    dept_name:string;
    dept_website:string;
    contact_name:string;
    contact_email:string;
    contact_phone:string;
    timezone:string;
    banner:string;
    directory_id:string;
    default_set:boolean;
    organization_default:boolean;
    students_can_create_user:boolean;
    show_class_schedule:boolean;
    cancel_notification_enabled:boolean;
    cancel_registration_enabled:boolean;
    mobile_resources_bacmobile_enabled:boolean;
    mobile_resources_ween_enabled:boolean;
    syslog_enabled:boolean;
    invite_from:string;
    invite_mailbox:string;
    notification_from:string;
    notification_mailbox:string;
    iprules_allow:boolean;
    auth_server:string;
    auth_server_type:string;
    ldap_server:string;
    ldap_dn:string;
    ldap_filter:string;
    demographics_enabled:string;
    created_at:string;
    updated_at:string;
    active_contract_days_remaining:number;
    status:string;
    user_count:number;
    participant_count:number;
    survey_sessions_count:number;
    ip_rules: OrganizationIpRule[];

}