// *** WARNING: this file was generated by Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Gke
{
    [GkeResourceType("gke:index:Cluster")]
    public partial class Cluster : global::Pulumi.ComponentResource
    {
        /// <summary>
        /// GKE cluster name
        /// </summary>
        [Output("cluster_name")]
        public Output<string> Cluster_name { get; private set; } = null!;

        /// <summary>
        /// K8s cluster kubeconfig.
        /// </summary>
        [Output("kubeconfig")]
        public Output<string> Kubeconfig { get; private set; } = null!;


        /// <summary>
        /// Create a Cluster resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Cluster(string name, ClusterArgs? args = null, ComponentResourceOptions? options = null)
            : base("gke:index:Cluster", name, args ?? new ClusterArgs(), MakeResourceOptions(options, ""), remote: true)
        {
        }

        private static ComponentResourceOptions MakeResourceOptions(ComponentResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new ComponentResourceOptions
            {
                Version = Utilities.Version,
                PluginDownloadURL = "github://api.github.com/pulumi-pequod/pequod-mlc-gke",
            };
            var merged = ComponentResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
    }

    public sealed class ClusterArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// K8s cluster master version to use.
        /// </summary>
        [Input("masterVersion")]
        public Input<string>? MasterVersion { get; set; }

        /// <summary>
        /// Initial node count for the cluster.
        /// </summary>
        [Input("nodeCount")]
        public Input<double>? NodeCount { get; set; }

        /// <summary>
        /// Machine type to use for the nodes.
        /// </summary>
        [Input("nodeMachineType")]
        public Input<string>? NodeMachineType { get; set; }

        public ClusterArgs()
        {
        }
        public static new ClusterArgs Empty => new ClusterArgs();
    }
}
