// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Cluster extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'gke:index:Cluster';

    /**
     * Returns true if the given object is an instance of Cluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cluster.__pulumiType;
    }

    /**
     * GKE cluster name
     */
    public /*out*/ readonly cluster_name!: pulumi.Output<string>;
    /**
     * K8s cluster kubeconfig.
     */
    public /*out*/ readonly kubeconfig!: pulumi.Output<string>;

    /**
     * Create a Cluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ClusterArgs, opts?: pulumi.ComponentResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["masterVersion"] = args ? args.masterVersion : undefined;
            resourceInputs["nodeCount"] = args ? args.nodeCount : undefined;
            resourceInputs["nodeMachineType"] = args ? args.nodeMachineType : undefined;
            resourceInputs["cluster_name"] = undefined /*out*/;
            resourceInputs["kubeconfig"] = undefined /*out*/;
        } else {
            resourceInputs["cluster_name"] = undefined /*out*/;
            resourceInputs["kubeconfig"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Cluster.__pulumiType, name, resourceInputs, opts, true /*remote*/);
    }
}

/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * K8s cluster master version to use.
     */
    masterVersion?: pulumi.Input<string>;
    /**
     * Initial node count for the cluster.
     */
    nodeCount?: pulumi.Input<number>;
    /**
     * Machine type to use for the nodes.
     */
    nodeMachineType?: pulumi.Input<string>;
}
